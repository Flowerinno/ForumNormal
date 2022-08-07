import classes from "./MainHeader.module.css";
import UA from "./images/UA.png";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";
import {RootReducerType} from "../store";

const MainHeader: React.FC = () => {
	const isLoggedIn = useSelector(
		(state: RootReducerType) => state.User.isLoggedIn
	);
	const enteredName = useSelector(
		(state: RootReducerType) => state.User.username
	);
	let enteredImage = useSelector((state: RootReducerType) => state.User.image);
	if (enteredImage === null) {
		enteredImage = "";
	}

	return (
		<nav className={classes.nav}>
			<div className={classes.logo}>
				<Link to={isLoggedIn ? "/posts-overview" : "/login"}>
					UA HealthCare
				</Link>
				<Link to={isLoggedIn ? "/posts-overview" : "/login"}>
					{<img src={UA} alt="UAPower" />}
				</Link>
			</div>
			<div className={classes.pages}>
				{isLoggedIn && <NavLink to="/posts-overview">Posts overview</NavLink>}
				{isLoggedIn && <NavLink to="/new-post">New Post</NavLink>}
				{isLoggedIn && <NavLink to="/user-profile">My Profile</NavLink>}
				<span className={classes.username}>{enteredName}</span>
				{isLoggedIn && <img className={classes.avatar} alt="" src={enteredImage} />}
			</div>
		</nav>
	);
};

export default MainHeader;
