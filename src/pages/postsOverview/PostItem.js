import {useDispatch, useSelector} from "react-redux";
import classes from "./PostItem.module.css";
import CommentsList from "./CommentsList";
import {useState} from "react";

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
		<div className={classes.div}>
			<section className={classes.section}>
				<img alt="" src={image} className={classes.img} />
				<div>
					<h1>{title}</h1>
				</div>
				<div>
					<p>{content}</p>
				</div>

				<button
					onClick={showComments}
					style={{marginLeft: "1700px", marginTop: "0px"}}
				>
					Comments
				</button>
				<button
					onClick={removeHandler}
					style={{marginLeft: "1700px", marginTop: "0px"}}
				>
					Delete
				</button>
				{isShown && <CommentsList postId={id} />}
			</section>
		</div>
	);
};

export default PostItem;
