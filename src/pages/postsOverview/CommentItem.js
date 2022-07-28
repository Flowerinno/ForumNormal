import classes from "./CommentItem.module.css";
import {useDispatch, useSelector} from "react-redux";
const CommentItem = ({name, id, content, postId}) => {
	const avatar = useSelector((state) => state.User.image);
	const dispatch = useDispatch();

	const deleteComment = () => {
		dispatch({type: "DELETECOMMENT", id, postId});
	};
	return (
		<div className={classes.comment}>
			<div className={classes.commentTitle}>
				<img alt="" src={avatar} />
				<h3>{name}</h3>
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
