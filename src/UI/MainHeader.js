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
		<header className={classes.header}>
			<nav className={classes.nav}>
				<ul className={classes.ul1}>
					<li className={classes.name}>
						<Link
							style={{textDecoration: "none"}}
							to={isLoggedIn ? "/posts-overview" : "/login"}
						>
							<h2>UA HealthCare</h2>
						</Link>
					</li>
					<li className={classes.logo}></li>
				</ul>
				<Link 
					className={classes.middle}
					style={{textDecoration: "none"}}
					to={isLoggedIn ? "/posts-overview" : "/login"}
				>
					<img style={{width: "50px"}} src={UA} alt="UAPower" />
				</Link>
				<ul className={classes.ul2}>
					<li>
						<NavLink to="/posts-overview">Posts overview</NavLink>

						{isLoggedIn && <NavLink to="/new-post">New Post</NavLink>}
						{isLoggedIn && (
							<React.Fragment>
								<p className={classes.username}>{enteredName}</p>

								<img className={classes.avatar} alt="" src={enteredImage} />
								<NavLink to="/user-profile">My Profile</NavLink>
							</React.Fragment>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
