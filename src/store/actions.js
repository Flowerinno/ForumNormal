import {ISLOGGEDIN, REMOVE, ADDPOST, DELETECOMMENT, SAVE} from "./actionTypes";

export function isLoggedIn() {
	return {
		type: ISLOGGEDIN,
	};
}

export function remove() {
	return {
		type: REMOVE,
	};
}

export function addPost() {
	return {
		type: ADDPOST,
	};
}

export function deleteComment() {
	return {
		type: DELETECOMMENT,
	};
}

export function save() {
	return {
		type: SAVE,
	};
}
