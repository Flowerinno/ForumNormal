import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import UserReducer from "./userReducer";
import PostReducer from "./postReducer";
import rootSaga from "../sagas";

const rootReducer = combineReducers({
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
