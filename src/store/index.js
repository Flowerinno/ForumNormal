import {combineReducers, createStore} from "redux";
import UserReducer from "./userReducer";
import PostReducer from "./postReducer";

const rootReducer = combineReducers({
	User: UserReducer,
	Post: PostReducer,
});

const store = createStore(rootReducer);

export default store;
