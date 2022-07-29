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

	useEffect(async () => {
		
		if (userToken) {
			const userData = await axios
				.get("http://138.68.77.210:8000/api/users/me", {
					headers: {Authorization: `Bearer ${userToken} `},
				})
				.then(function (response) {
					console.log(response);
					const data = response.data;
					dispatch({
						type: "ISLOGGEDIN",
						username: data.username,
						image: data.avatar,
						id: data.id,
					});
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}, []);
	return null;
};

export default LoggingObserver;
