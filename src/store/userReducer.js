const initialState = {
	isLoggedIn: true,
	loginName: "",
	image: null,
	defaultAvatar: null
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ISLOGGEDIN":
			return {
				...state,
				isLoggedIn: true,
				loginName: action.loginName,
				defaultAvatar: action.defaultAvatar
			};
		case "SAVE": {
			const userName = action.userName;
			const userImage = action.userImage;
			let updated = {};
			if (userName) {
				updated.loginName = userName;
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
				loginName: "",
			};
		}
		default:
			return state;
	}
};

export default UserReducer;
