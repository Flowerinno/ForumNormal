import {useDispatch, useSelector} from "react-redux";
import classes from "./PostItem.module.css";
import CommentsList from "./CommentsList";
import {useState} from "react";
import axios from "axios";

const PostItem = (props) => {
	const image = useSelector((state) => state.User.image);

	const [isShown, setIsShown] = useState(false);
	const dispatch = useDispatch();

	const {id, content, title} = props;
	const removeHandler = () => {
		dispatch({type: "REMOVE", id});
	};

	const showComments = () => {
		setIsShown((prevShow) => !prevShow);
	};
	return (
		<div className={classes.postItem}>
			<div className={classes.postTitle}>
				<img alt="" src={image} className={classes.img} />
				<span>username</span>
			</div>
			<div className={classes.postContent}>
				<h4>{title}</h4>
				<span>{content}</span>
			</div>
			<div className={classes.postItemButtons}>
				<button onClick={showComments}>comments</button>
				<button onClick={removeHandler}>delete</button>
			</div>
			{isShown && <CommentsList postId={id} />}
		</div>
	);
};

export default PostItem;
