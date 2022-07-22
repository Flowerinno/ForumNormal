import CommentItem from "./CommentItem";
import {useDispatch, useSelector, useRef} from "react-redux";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
	// const commentInputRef = useRef();
	const dispatch = useDispatch();
	const comments = useSelector(state => state.posts[0].comments);
	const comments1 = useSelector(state => state.posts[0].comments[0]);
	const name = useSelector((state) => state.name);
	console.log(comments1)

	// function createComment() {
	// 	const enteredContent = commentInputRef.current.value;
	// 	dispatch({type: "ADDCOMMENT", name: name, content: enteredContent});
	// }
	return (
		<div>
			{comments.length === 0 ? (
				<p>
					No comments found, would you like to create one?
					{/* <input ref={commentInputRef} />
					<button onClick={createComment}>Create comment</button> */}
				</p>
			) : (
				<ul>
					<li>
						{comments.map((com) => (
							<CommentItem
								id={com.id}
								content={com.content}
								name={com.name}
								key={com.id}
							/>
						))}
					</li>
				</ul>
			)}
		</div>
	);
};

export default CommentsList;
