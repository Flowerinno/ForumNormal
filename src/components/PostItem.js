import {useDispatch, useSelector} from "react-redux";
import classes from "./PostItem.module.css";
import CommentsList from "./CommentsList";
import { useState } from "react";

const PostItem = (props) => {
	const state = useSelector(state => state)
	const [isShown, setIsShown] = useState(false);
	const dispatch = useDispatch();
	// const title = useSelector(state => state.posts.title);
	// const content = useSelector(state => state.posts.content);
	// const id = useSelector(state => state.posts.content);
	const {id, content, title} = props;
	const removeHandler = () => {
		dispatch({type: "REMOVE", id});
		console.log(id);
	};
	console.log(state)
	const showComments = () => {
		setIsShown(prevShow => !prevShow)
		console.log(isShown)
	}
	return (
		<section className={classes.section} >
			<h1>{title}</h1>
			<p>{content}</p>
			<button onClick={showComments} style={{marginLeft: '1700px', marginTop: '50px'}}>Comments</button>
			<button onClick={removeHandler} style={{marginLeft: '1700px', marginTop: '15px'}}>Delete</button>
				{/* {isShown && <CommentsList />} */}
			
		</section>
	);
};

export default PostItem;
