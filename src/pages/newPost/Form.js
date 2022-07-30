import classes from "./Form.module.css";
import {useDispatch} from "react-redux";
import React, {useRef} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
const Form = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const enteredTitle = useRef();
	const enteredContent = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const title = enteredTitle.current.value;
		const content = enteredContent.current.value;
		const userToken = localStorage.getItem("userToken");

		axios
			.post(
				"http://138.68.77.210:8000/api/posts",
				{
					title: title,
					content: content,
				},
				{
					headers: {
						Authorization: `Bearer ${userToken}`,
					},
				}
			)
			.then(function (response) {
				console.log(response);

				axios
					.get("http://138.68.77.210:8000/api/posts", {
						headers: {
							Authorization: `Bearer ${userToken}`,
						},
					})
					.then(function (response) {
						const data = response.data.posts;
						dispatch({type: "SETPOSTS", posts: data});
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});
				history.push("/posts-overview");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<React.Fragment>
			<form onSubmit={submitHandler} className={classes.form}>
				<h2 htmlFor="title">Post Title</h2>
				<input ref={enteredTitle} id="title" type="text" required />
				<h2 htmlFor="content">Post Content</h2>
				<input id="content" ref={enteredContent} type="text" required />
				<button type="submit">Submit</button>
			</form>
		</React.Fragment>
	);
};

export default Form;
