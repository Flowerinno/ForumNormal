import {Link} from "react-router-dom";
import s from "./Signup.module.css";
import { useDispatch } from "react-redux";
import {useCallback} from "react";
import {useRef} from "react";
import {useHistory} from "react-router-dom";
const Signup = () => {
	const dispatch = useDispatch();
	const usernameInput = useRef();
	const passwordInput = useRef();

	const history = useHistory();

	const signupHandler = () => {
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
