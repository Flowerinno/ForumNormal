import classes from "./MainHeader.module.css";
import UA from "./images/UA.png";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";

const MainHeader = (props) => {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	const enteredName = useSelector((state) => state.enteredName);
	const enteredImage = useSelector((state) => state.image);
	console.log(enteredImage)

	// console.log(enteredImage, enteredName);
	return (
		<div className={classes.header}>
			<Link to={isLoggedIn ? "/posts-overview" : "/login"}>
				<h2 style={{color: "black"}}>UA HealthCare</h2>
			</Link>

			<Link to={isLoggedIn ? "/posts-overview" : "/login"}>
				<img
					style={{width: "50px", margin: "auto", justifyContent: "center"}}
					src={UA}
					alt="UAPower"
				/>
			</Link>

			<ul>
				<li>
					<NavLink to="/posts-overview">Posts overview</NavLink>
				</li>
				{isLoggedIn && (
					<li>
						<NavLink to="/new-post">New Post</NavLink>
					</li>
				)}
				{isLoggedIn && (
					<li>
						{enteredName}
						<img alt="" src={enteredImage} style={{width: "25px"}} />
						<NavLink to="/user-profile">My Profile</NavLink>
					</li>
				)}
			</ul>
		</div>
	);
};

export default MainHeader;
