import {Link} from "react-router-dom";
import s from "./Signup.module.css";
import axios from "axios";
import {useCallback} from "react";
import {useRef} from "react";
import {useHistory} from "react-router-dom";
const Signup = () => {
	const usernameInput = useRef();
	const passwordInput = useRef();

	const history = useHistory();

	const signupHandler = useCallback(() => {
		const enteredUsername = usernameInput.current.value;
		const enteredPassword = passwordInput.current.value;
		axios
			.post("http://138.68.77.210:8000/register", {
				username: enteredUsername,
				password: enteredPassword,
			})
			.then(function (response) {
				history.push("/login");
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [usernameInput, passwordInput]);

	return (
		<div className={s.signup}>
			<h2>Sign up</h2>
			<div className={s.signupInput}>
				<input
					ref={usernameInput}
					type="text"
					placeholder="username"
					required
				/>
				<input
					ref={passwordInput}
					type="password"
					placeholder="password"
					required
				/>
			</div>
			<div className={s.signupButton}>
				<button onClick={signupHandler}>Create account</button>
				<div>
					<p> Already a forumer ?</p>
					<Link to="/login">Log in</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
