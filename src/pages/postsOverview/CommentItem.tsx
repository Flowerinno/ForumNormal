import classes from "./CommentItem.module.css";
import {useDispatch} from "react-redux";

type PropsType = {
	name: string;
	id: string;
	content: string;
	postId: string;
	avatar: string | null;
	time: number;
};

const CommentItem = ({name, id, content, postId, avatar, time}: PropsType) => {
	const dispatch = useDispatch();

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
	const deleteComment = () => {
		dispatch({type: "DELETECOMMENT", id, postId});
	};
	if (avatar === null) {
		avatar = "";
	}
	return (
		<div className={classes.comment}>
			<div className={classes.commentTitle}>
				<img alt="" src={avatar} />
				<h3>{name}</h3>
				{updatedDate}
				<button
					style={{
						height: "30px",
						width: "50px",
						fontSize: "10px",
						marginTop: "5px",
					}}
					onClick={deleteComment}
				>
					delete
				</button>
			</div>
			<span>{content}</span>
		</div>
	);
};

export default CommentItem;
