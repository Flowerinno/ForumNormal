import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import UserReducer from "./userReducer";
import PostReducer from "./postReducer";
import rootSaga from "../sagas";
import { UserStateType } from "./types";
import { PostStateType } from "./types";

export interface RootReducerType {
	User: UserStateType,
	Post: PostStateType
}

const rootReducer = combineReducers<RootReducerType>({
	User: UserReducer,
	Post: PostReducer,
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


export default store;
