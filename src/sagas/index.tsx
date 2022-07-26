import {call, ForkEffect, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {
	UserLoginActionType,
	NewPostActionType,
	NewCommentActionType,
	SignupUserActionType,
	SaveUserDataActionType,
} from "./sagasTypes";

function* fetchPosts() {
	try {
		const userToken = localStorage.getItem("userToken");
		const {data} = yield call(
			axios.get,
			"http://167.99.248.243:8000/api/posts",
			{
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			}
		);
		yield put({type: "SETPOSTS", posts: data.posts});
	} catch (e) {
		console.log(e);
	}
}

function* userLogin({name, password}: UserLoginActionType) {
	try {
		const {data} = yield call(axios.post, "http://167.99.248.243:8000/login", {
			username: name,
			password: password,
		});
		const userToken = data.token;
		localStorage.setItem("userToken", userToken);
		yield call(fetchUser);
	} catch (e) {
		console.log(e);
	}
}

function* fetchUser() {
	try {
		const userToken = localStorage.getItem("userToken");
		const {data} = yield call(
			axios.get,
			"http://167.99.248.243:8000/api/users/me",
			{
				headers: {Authorization: `Bearer ${userToken} `},
			}
		);
		yield put({
			type: "ISLOGGEDIN",
			username: data.username,
			image: data.avatar,
			id: data.id,
		});
	} catch (e) {
		console.log(e);
	}
}

function* newPost({title, content}: NewPostActionType) {
	try {
		const userToken = localStorage.getItem("userToken");
		yield call(
			axios.post,
			"http://167.99.248.243:8000/api/posts",
			{
				title: title,
				content: content,
			},
			{
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			}
		);
		yield call(fetchPosts);
	} catch (e) {
		console.log(e);
	}
}

function* newComment({content, postId}: NewCommentActionType) {
	try {
		const userToken = localStorage.getItem("userToken");
		yield call(
			axios.post,
			`http://167.99.248.243:8000/api/posts/${postId}/comments`,
			{
				content: content,
			},
			{
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			}
		);
		// yield put({type: "ADDCOMMENT"});
		// yield call(fetchPosts);
	} catch (e) {
		console.log(e);
	}
}

function* signupUser({username, password}: SignupUserActionType) {
	try {
		yield call(axios.post, "http://167.99.248.243:8000/register", {
			username: username,
			password: password,
		});
	} catch (e) {
		console.log(e);
	}
}

function* saveUserData({avatar, username}: SaveUserDataActionType) {
	try {
		const userToken = localStorage.getItem("userToken");
		yield call(
			axios.put,
			"http://167.99.248.243:8000/api/users/me",
			{
				username: username,
				avatar: avatar,
			},
			{
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			}
		);
		yield put({type: "SAVE", username: username, userImage: avatar});
	} catch (e) {
		console.log(e);
	}
}

function* loggingObserver() {
	try {
		yield call(fetchUser);
	} catch (e) {
		console.log(e);
	}
}

function* rootSaga() {
	yield takeLatest("FETCH_POSTS", fetchPosts);
	yield takeLatest("NEW_POST", newPost);
	yield takeLatest("NEW_COMMENT", newComment);
	yield takeLatest("USER_LOGIN", userLogin);
	yield takeLatest("FETCH_USER", fetchUser);
	yield takeLatest("SIGNUP_USER", signupUser);
	yield takeLatest("SAVE_USER_DATA", saveUserData);
	yield takeLatest("LOG_OBSERVER", loggingObserver);
}

export default rootSaga;
