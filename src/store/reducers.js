const initialState = {
	posts: [
		{
			title: "Poroshenko",
			content: "Loh",
			id: 1,
			comments: [],
		},
	],

	isLoggedIn: false,
	enteredName: "",
	image: null,
	enteredTitle: "",
	enteredContent: "",
};

function Reducer(state = initialState, action) {
	switch (action.type) {
		case "ISLOGGEDIN":
			return {
				...state,
				isLoggedIn: true,
				enteredName: action.name,
				image: action.image,
			};
		case "REMOVE": {
			const id = action.id;
			return {...state, posts: state.posts.filter((item) => item.id !== id)};
		}
		case "ADDPOST": {
			const data = {
				title: action.title,
				content: action.content,
				id: Math.random(),
			};
			return {
				...state,
				posts: [...state.posts, data],
			};
		}
		case "ADDCOMMENT": {
			const commentData = {
				name: action.name,
				content: action.content,
				id: Math.random(),
				postId: action.postId
				
			};
			let searchPost;
			for (let post of state.posts) {
				if (action.postId === post.id) {
					searchPost = post;
				}
			}
			let updatedPost = {
				...searchPost,
				comments: [...searchPost.comments, commentData],
			};
			return {
				...state,
				posts: state.posts.map((post) => {
					if (post.id !== updatedPost.id) {
						return post;
					}
					return updatedPost;
				}),
			};
		}

		case "DELETECOMMENT": {
			const id = action.id;
			return {
				...state,
				comments: state.comments.filter((item) => item.id !== id),
			};
		}
		default:
			return state;
	}
}

export default Reducer;
