import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
const LoggingObserver = () => {
	const location = useLocation();
	const history = useHistory();
	const isLoggedIn = useSelector((state) => state.User.isLoggedIn);
	useEffect(() => {
		if (isLoggedIn === false && location.pathname !== "/login") {
			history.push("/login");
		}
	}, [isLoggedIn, history, location]);
	return null;
};

export default LoggingObserver;
