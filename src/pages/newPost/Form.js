import classes from "./Form.module.css";
import {useDispatch} from "react-redux";
import React, {useRef} from "react";
import {useHistory} from "react-router-dom";

const Form = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const enteredTitle = useRef();
	const enteredContent = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const title = enteredTitle.current.value;
		const content = enteredContent.current.value;
		dispatch({type: "ADDPOST", title, enteredContent: content});
		history.push("/posts-overview");
	};

	return (
		<React.Fragment>
			<form onSubmit={submitHandler} className={classes.form}>
				<h2 htmlFor="title">Post Title</h2>
				<input ref={enteredTitle} id="title" required />
				<h2 htmlFor="content">Post Content</h2>
				<input id="content" ref={enteredContent} required />
				<button type="submit">Submit</button>
			</form>
		</React.Fragment>
	);
};

export default Form;
