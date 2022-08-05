import {LoginActionType, SaveActionType, LogoutActionType, UserStateType} from "./types";


const initialState: UserStateType = {
	isLoggedIn: false,
	username: "",
	image: null,
	id: "",
};

type ActionType = LoginActionType | SaveActionType | LogoutActionType



const UserReducer = (state = initialState, action : ActionType) => {
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
			let updated: {[key: string]: string} = {};
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
