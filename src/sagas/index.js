import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* fetchPosts(action) {
	try {
		const userToken = localStorage.getItem("userToken");
		const {data} = yield call(
			axios.get,
			"http://138.68.77.210:8000/api/posts",
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

function* rootSaga() {
	yield takeLatest("FETCH_POSTS", fetchPosts);
}

export default rootSaga;
