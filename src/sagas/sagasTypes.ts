export interface UserLoginActionType {
	type: "USER_LOGIN";
	name: string;
	password: string;
}

export interface NewPostActionType {
	type: "NEW_POST";
	title: string;
	content: string;
}

export interface NewCommentActionType {
    type: "NEW_COMMENT",
    content: string,
    postId: string
}
export interface SignupUserActionType {
    type: "SIGNUP_USER",
    username: string,
    password: string
}
export interface SaveUserDataActionType {
    type: "SAVE_USER_DATA",
    username: string,
    avatar: string | null
}

