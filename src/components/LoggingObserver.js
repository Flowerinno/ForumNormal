import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";
const LoggingObserver = () => {
	const location = useLocation();
	const history = useHistory();
	const isLoggedIn = useSelector((state) => state.User.isLoggedIn);

	const dispatch = useDispatch();
	const userToken = localStorage.getItem("userToken");
	useEffect(() => {
		if (isLoggedIn === false && location.pathname !== "/login" && !userToken) {
			history.push("/login");
		}
	}, [isLoggedIn]);

	useEffect(() => {
		if (userToken) {
			dispatch({type: "LOG_OBSERVER"})
		}
	}, []);
	return null;
};

export default LoggingObserver;
