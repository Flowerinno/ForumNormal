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
		dispatch({type: "ADDPOST", title, content});
		history.push("/posts-overview");
		console.log(title, content);
	};

	return (
		<React.Fragment>
			<form onSubmit={submitHandler} className={classes.form}>
				<label htmlFor="title">Title</label>
				<input ref={enteredTitle} id="title" />
				<label htmlFor="content">Content</label>
				<input id="content" ref={enteredContent} />
				<button type="submit">Submit</button>
			</form>
		</React.Fragment>
	);
};

export default Form;
