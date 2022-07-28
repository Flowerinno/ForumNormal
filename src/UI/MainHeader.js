import classes from "./MainHeader.module.css";
import UA from "./images/UA.png";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";
import React from "react";

const MainHeader = (props) => {
	const isLoggedIn = useSelector((state) => state.User.isLoggedIn);
	const enteredName = useSelector((state) => state.User.loginName);
	const enteredImage = useSelector((state) => state.User.image);

	return (
		<nav className={classes.nav}>
			<div className={classes.logo}>
				<Link to={isLoggedIn ? "/posts-overview" : "/login"}>
					UA HealthCare
				</Link>
				<Link to={isLoggedIn ? "/posts-overview" : "/login"}>
					<img src={UA} alt="UAPower" />
				</Link>
			</div>
			<div className={classes.pages}>
				{isLoggedIn && <NavLink to="/posts-overview">Posts overview</NavLink>}
				{isLoggedIn && <NavLink to="/new-post">New Post</NavLink>}
				{isLoggedIn && <NavLink to="/user-profile">My Profile</NavLink>}
				<span className={classes.username}>{enteredName}</span>
				<img className={classes.avatar} alt="" src={enteredImage} />
			</div>
		</nav>
	);
};

export default MainHeader;
