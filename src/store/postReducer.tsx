import { PostStateType, SetPostsActionType, AddCommentActionType  } from "./types";
const initialState: PostStateType = {
	posts: [],
};

type ActionType = SetPostsActionType | AddCommentActionType
function PostReducer(state = initialState, action: ActionType) {
	switch (action.type) {
		case "SETPOSTS": {
			return {
				...state,
				posts: action.posts,
			};
		}
		case 'ADD_COMMENT': {
			const newComment = action.data;
			const post = state.posts.find(post => post.id === newComment.postId);
			if (post === undefined) {
				return state;
			}
			return {
				...state,
				posts: state.posts.map(p => {
					if (p.id !== post.id) {
						return p;
					} else {
						return {
							...p,
							comments: [...p.comments, newComment].sort((firstcomm, secondcomm) => {
								return firstcomm.createdAt - secondcomm.createdAt
							})
						}
					}
				})
			}

		}
		default:
			return state;
		
	}
}

export default PostReducer;
