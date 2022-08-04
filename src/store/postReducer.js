const initialState = {
	posts: [],
};

function PostReducer(state = initialState, action) {
	switch (action.type) {
		case "REMOVE": {
			const id = action.id;
			return {...state, posts: state.posts.filter((item) => item.id !== id)};
		}
		case "SETPOSTS": {
			return {
				...state,
				posts: action.posts,
			};
		}
		// case "ADDPOST": {
		// 	const data = {

		// 		title: action.title,
		// 		content: action.enteredContent,

		// 		comments: [],
		// 	};
		// 	return {
		// 		...state,
		// 		posts: [...state.posts, data],
		// 	};
		// }

		// case "ADDCOMMENT": {
		// 	const commentData = {
		// 		username: action.username,
		// 		content: action.content,
		// 		id: Math.random(),
		// 		postId: action.postId,
		// 	};
		// 	let searchPost;
		// 	for (let post of state.posts) {
		// 		if (action.postId === post.id) {
		// 			searchPost = post;
		// 		}
		// 	}
		// 	let updatedPost = {
		// 		...searchPost,
		// 		comments: [...searchPost.comments, commentData],
		// 	};

		// 	return {
		// 		...state,
		// 		posts: state.posts.map((post) => {
		// 			if (post.id !== updatedPost.id) {
		// 				return post;
		// 			}
		// 			return updatedPost;
		// 		}),
		// 	};
		// }

		// case "DELETECOMMENT": {
		// 	const id = action.id;
		// 	const postId = action.postId;
		// 	let searchPost;
		// 	for (let post of state.posts) {
		// 		if (postId === post.id) {
		// 			searchPost = post;
		// 		}
		// 	}
		// 	let updatedPost = {
		// 		...searchPost,
		// 		comments: searchPost.comments.filter((item) => item.id !== id),
		// 	};
		// 	return {
		// 		...state,
		// 		posts: state.posts.map((post) => {
		// 			if (post.id !== updatedPost.id) {
		// 				return post;
		// 			}
		// 			return updatedPost;
		// 		}),
		// 	};
		// }

		default:
			return state;
	}
}

export default PostReducer;
