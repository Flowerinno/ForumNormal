const initialState = {
	isLoggedIn: false,
	username: "",
	image: null,
	id: "",
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ISLOGGEDIN":
			return {
				...state,
				isLoggedIn: true,
				username: action.username,
				image: action.image,
				id: action.id,
			};
		case "SAVE": {
			const username = action.username;
			const userImage = action.userImage;
			let updated = {};
			if (username) {
				updated.username = username;
			}
			if (userImage) {
				updated.image = userImage;
			}
			return {
				...state,
				...updated,
			};
		}
		case "LOGOUT": {
			return {
				...state,
				isLoggedIn: false,
				image: null,
				username: "",
			};
		}
		default:
			return state;
	}
};

export default UserReducer;
