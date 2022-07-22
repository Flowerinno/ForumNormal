import React, {useState, useRef} from "react";
import classes from "./Login.module.css";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
const Login = () => {
	const [image, setImage] = useState({file: null, picked: false});
	const [base64, setBase64] = useState();
	const dispatch = useDispatch();
	const nameInputRef = useRef();
	const imageInputRef = useRef();
	const history = useHistory();
 
	const onChangeImage = (e) => {
		setImage({
			file: URL.createObjectURL(e.target.files[0]),
			picked: true,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		// const enteredImage = document.getElementById("image").files[0].name;

		const enteredName = nameInputRef.current.value;
		if (enteredName.trim().length === 0) {
			return alert("The name field must not be empty!");
		} 
		setImage({picked: true});
		dispatch({type: "ISLOGGEDIN", name: enteredName, image: base64});
		
		history.push("/posts-overview");
	};

	const getBase64 = (file) => {
		return new Promise((resolve) => {
			let fileInfo;
			let baseURL = "";
			// Make new FileReader
			let reader = new FileReader();

			// Convert the file to base64 text
			reader.readAsDataURL(file);

			// on reader load somthing...
			reader.onload = () => {
				// Make a fileInfo Object
				console.log("Called", reader);
				baseURL = reader.result;
				console.log(baseURL);
				resolve(baseURL);
			};

			console.log(fileInfo);
		});
	};

	const handleFileInputChange = (e) => {
		console.log(e.target.files[0]);

		let file = e.target.files[0];

		getBase64(file)
			.then((result) => {
				file["base64"] = result;
				console.log("File Is", file);
				setBase64(result)
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<form className={classes.form}>
			<header className="header">Login</header>
			<div>
				<input ref={nameInputRef} placeholder="Name" maxLength="50"></input>
			</div>
			<div>
				<input
					type="file"
					id="image"
					style={{fontSize: "15px"}}
					ref={imageInputRef}
					onChange={handleFileInputChange}
				/>
				<img style={{width: "35%", left: "50px"}} src={base64} alt=""></img>
			</div>
			<button onClick={submitHandler}>Log in</button>
		</form>
	);
};

export default Login;
