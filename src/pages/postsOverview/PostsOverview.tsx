import Posts from "./Posts";
import useWebSocket, {ReadyState} from "react-use-websocket";
import {useEffect} from "react";
import { useDispatch } from "react-redux";

const PostsOverview = () => {
	const dispatch = useDispatch();
	const {sendMessage, lastMessage, readyState} = useWebSocket(
		"ws://167.99.248.243:8000/ws"
	);

	useEffect(() => {
		const token = localStorage.getItem("userToken");
		if (ReadyState.OPEN === readyState) {
			sendMessage(JSON.stringify({token}));
		}
	}, [readyState]);

	useEffect(() => {
		
		console.log(lastMessage)
		if (lastMessage === null) {
			return;
		}
		const data = JSON.parse(lastMessage.data)
		if (!data.id) {
			return;
		}
		dispatch({type: 'ADD_COMMENT', data})
	}, [lastMessage]);
	return <Posts />;
};

export default PostsOverview;
