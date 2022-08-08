import CommentItem from "./CommentItem";
import {useDispatch, useSelector} from "react-redux";
import classes from "./CommentsList.module.css";
import {useRef} from "react";
import { RootReducerType } from "../../store";

type PropsType = {
	postId: string
}

const CommentsList = (props: PropsType) => {
	const dispatch = useDispatch();
	const commentInputRef = useRef<HTMLInputElement>(null);
	const posts = useSelector((state: RootReducerType) => state.Post.posts);

	const name = useSelector((state: RootReducerType) => state.User.username);

	let filteredPosts = posts.filter((post) => post.id === props.postId);
	
	if (filteredPosts.length !== 1) {
		return <></>;
	} 
	const selectedPost = filteredPosts[0];
	
	function createComment() {
		if (commentInputRef.current === null) {
			return;
		}
		const enteredComment = commentInputRef.current.value;
		const postId = props.postId;
		dispatch({type: "NEW_COMMENT", content: enteredComment, postId: postId});

		commentInputRef.current.value = "";
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
						name={com.username}
						key={com.id}
						avatar={com.avatar}
						time={com.createdAt}
					/>
				))}
			</ul>
		</div>
	);
};

export default CommentsList;
