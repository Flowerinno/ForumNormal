import { PostStateType, SetPostsActionType } from "./types";
const initialState: PostStateType = {
	posts: [],
};

type ActionType = SetPostsActionType
function PostReducer(state = initialState, action: ActionType) {
	switch (action.type) {
		case "SETPOSTS": {
			return {
				...state,
				posts: action.posts,
			};
		}
		default:
			return state;
	}
}

export default PostReducer;
