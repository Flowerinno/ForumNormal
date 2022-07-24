import React, {useState, useRef} from "react";
import classes from "./Login.module.css";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import getBase64 from "../../services/ImageService";
const Login = () => {
	const [base64, setBase64] = useState();
	const dispatch = useDispatch();
	const nameInputRef = useRef();
	const imageInputRef = useRef();
	const history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredName = nameInputRef.current.value;
		if (enteredName.trim().length === 0) {
			return alert("The name field must not be empty!");
		}

		dispatch({type: "ISLOGGEDIN", loginName: enteredName, image: base64});

		history.push("/posts-overview");
	};

	const handleFileInputChange = (e) => {
		console.log(e.target.files[0]);

		let file = e.target.files[0];

		getBase64(file)
			.then((result) => {
				file["base64"] = result;

				setBase64(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<header className={classes.header}>Login</header>
			<div>
				<input
					required
					ref={nameInputRef}
					placeholder="Username"
					maxLength="50"
				></input>
			</div>
			<div>
				<label htmlFor="avatar">Click to select avatar</label>
				<input
					required
					placeholder="Avatar"
					type="file"
					style={{fontSize: "15px"}}
					ref={imageInputRef}
					onChange={handleFileInputChange}
					hidden
					name='avatar'
					id='avatar'

				/>

				<img src={base64} alt=""></img>
			</div>
			<button >Log in</button>
		</form>
	);
};

export default Login;
