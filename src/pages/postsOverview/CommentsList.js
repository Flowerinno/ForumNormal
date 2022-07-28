import CommentItem from "./CommentItem";
import {useDispatch, useSelector} from "react-redux";
import classes from "./CommentsList.module.css";
import {useRef} from "react";

const CommentsList = (props) => {
	const dispatch = useDispatch();
	const commentInputRef = useRef();
	const posts = useSelector((state) => state.Post.posts);

	const name = useSelector((state) => state.User.loginName);
	console.log(posts);
	// let updatedComments = [];
	// const filteredComments = (postId) => {
	// 	updatedComments = comments.filter((commentId) => commentId === postId);
	// };

	let selectedPost = posts.filter((post) => post.id === props.postId);
	if (selectedPost.length === 1) {
		selectedPost = selectedPost[0];
	} else {
		return <p>ERROR</p>;
	}
	console.log(selectedPost);
	function createComment() {
		const enteredComment = commentInputRef.current.value;
		const postId = props.postId;

		dispatch({
			type: "ADDCOMMENT",
			loginName: name,
			content: enteredComment,
			postId: postId,
		});
		commentInputRef.current.value = '';
	}
	return (
		<div className={classes.comments}>
			<div>
				Create a new comment!
				<input ref={commentInputRef} />
				<button onClick={createComment}>Create comment</button>
			</div>

			<ul>
				{selectedPost.comments.map((com) => (
					<CommentItem
						postId={props.postId}
						id={com.id}
						content={com.content}
						name={com.loginName}
						key={com.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default CommentsList;
