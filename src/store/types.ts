interface CommentType {
	authorId: string;
	avatar: string | null;
	content: string;
	id: string;
	createdAt: number;
	username: string;
}
interface PostType {
	title: string;
	content: string;
	id: string;
	comments: CommentType[];
	authorId: string;
	image: string;
	username: string;
	avatar: string | null;
	createdAt: number;
}
export interface PostStateType {
	posts: PostType[];
}

export interface LoginActionType {
	type: "ISLOGGEDIN";
	username: string;
	image: string | null;
	id: string;
}

export interface SaveActionType {
	type: "SAVE";
	username: string;
	userImage: string | null;
}

export interface LogoutActionType {
	type: "LOGOUT";
}

export interface SetPostsActionType {
    type: "SETPOSTS",
    posts: PostType[]
}

export interface UserStateType {
	isLoggedIn: boolean;
	username: string;
	image: string | null;
	id: string;
}