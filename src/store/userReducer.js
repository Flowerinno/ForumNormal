const initialState = {
	isLoggedIn: false,
	loginName: "",
	image: null,
	id: ''
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ISLOGGEDIN":
			return {
				...state,
				isLoggedIn: true,
				loginName: action.loginName,
				image: action.image,
				id: action.id,
			};
		case "SAVE": {
			const loginName = action.loginName;
			const userImage = action.userImage;
			let updated = {};
			if (loginName) {
				updated.loginName = loginName;
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
