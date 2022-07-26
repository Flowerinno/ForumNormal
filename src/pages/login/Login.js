import React, {useState, useRef} from "react";
import classes from "./Login.module.css";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import getBase64 from "../../services/ImageService";
import axios from 'axios'
const Login = () => {
	const [base64, setBase64] = useState();

	const dispatch = useDispatch();
	const nameInputRef = useRef();
	const passwordInputRef = useRef();

	const history = useHistory();



	const submitHandler = (e) => {
		e.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		if (enteredName.trim().length === 0) {
			return alert("The name field must not be empty!");
		}
		axios.post('http://138.68.77.210:8000/login', {username: enteredName,password: enteredPassword })
			.then(function (response) {
				console.log(response);
				dispatch({type: "ISLOGGEDIN", loginName: enteredName});
				history.push("/posts-overview");

		})
			.catch(function (error) {
				console.log(error);
			});


	};


	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<h2 className={classes.h2}>Login</h2>
			<div>
				<input
					required
					ref={nameInputRef}
					placeholder="Username"
					maxLength="50"
				></input>
			</div>
			<div>

				<input
					required
					placeholder="Password"
					type="password"
					style={{fontSize: "15px"}}
					ref={passwordInputRef}



				/>


			</div>
			<button >Log in</button>
			<div className={classes.link}>
				<Link to='/signup'>Sign up</Link>
			</div>
		</form>
	);
};

export default Login;
