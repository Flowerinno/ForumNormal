import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './CommentItem.module.css'
import { useDispatch } from 'react-redux';
const CommentItem = ({ name, id, content }) => {
    
	const dispatch = useDispatch();
    
	const deleteComment = () => {
        dispatch({type: 'DELETECOMMENT', id})
    }
	return (
		<div onClick={deleteComment}>  
			<h1>{name}</h1>
			<p>{content}</p>
		</div>
	);
};

export default CommentItem;
