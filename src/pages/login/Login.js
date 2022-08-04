import React, {useRef} from "react";
import classes from "./Login.module.css";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import axios from "axios";

const Login = () => {
	const dispatch = useDispatch();

	const nameInputRef = useRef();

	const passwordInputRef = useRef();

	const history = useHistory();

	const submitHandler = async (e) => {
		e.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		dispatch({type: "USER_LOGIN", name: enteredName, password: enteredPassword})
		history.push("/posts-overview");
			
	};

	return (
		<div className={classes.login}>
			<h2>Login</h2>
			<div className={classes.loginInput}>
				<input
					required
					ref={nameInputRef}
					placeholder="username"
					maxLength="50"
				></input>
				<input
					required
					placeholder="password"
					type="password"
					ref={passwordInputRef}
				/>
			</div>
			<div className={classes.loginButton}>
				<button onClick={submitHandler}>Log in</button>
				<Link to="/signup">Sign up</Link>
			</div>
		</div>
	);
};

export default Login;
