import { useDispatch, useSelector } from "react-redux";
import classes from "./PostItem.module.css";
import CommentsList from "./CommentsList";
import {useState} from "react";
import { RootReducerType } from "../../store";

type PropsType = {
	id: string,
	content: string,
	title: string,
	username: string,
	avatar: string | null,
	authorId: string,
	time: number
}

const PostItem = (props: PropsType) => {
	const [isShown, setIsShown] = useState(false);
	const dispatch = useDispatch();
	const userId = useSelector((state: RootReducerType) => state.User.id);
	let {id, content, title, username, avatar, authorId, time} = props;

	const date = new Date(time * 1000);
	
	
	const updatedDate =
		(date.getDate() +
			"/" +
			(date.getMonth() + 1) +
			"/" +
			date.getFullYear() +
			" " +
			date.getHours() +
			":" +
			date.getMinutes() +
			":" +
			date.getSeconds());

	const removeHandler = () => {
		dispatch({type: "REMOVE", id});
	};

	const showComments = () => {
		setIsShown((prevShow) => !prevShow);
	};
	if (avatar === null) {
		avatar = ''
	}
	return (
		<div className={classes.postItem}>
			<div className={classes.postTitle}>
				<img alt="" src={avatar} className={classes.img} />
				<span>{username}</span>
				<span style={{fontSize: "20px"}} className={classes.date}>
					{updatedDate}
				</span>
			</div>
			<div className={classes.postContent}>
				<h4>{title}</h4>
				<span>{content}</span>
			</div>
			<div className={classes.postItemButtons}>
				<button onClick={showComments}>comments</button>

				{userId === authorId && <button onClick={removeHandler}>delete</button>}
			</div>
			{isShown && <CommentsList postId={id} />}
		</div>
	);
};

export default PostItem;
