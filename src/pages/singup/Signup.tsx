import { Link } from "react-router-dom";
import s from "./Signup.module.css";
import { useDispatch } from "react-redux";
import {useRef} from "react";
import {useHistory} from "react-router-dom";
const Signup = () => {
	const dispatch = useDispatch();
	const usernameInput = useRef<HTMLInputElement>(null);
	const passwordInput = useRef<HTMLInputElement>(null);

	const history = useHistory();

	const signupHandler = () => {
		if (usernameInput.current === null || passwordInput.current === null) {
			return;
		}
		const enteredUsername = usernameInput.current.value;
		const enteredPassword = passwordInput.current.value;
		dispatch({type: 'SIGNUP_USER', username: enteredUsername, password: enteredPassword})
	};

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
