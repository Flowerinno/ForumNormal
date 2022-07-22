import React, { useEffect } from "react";
import PostItem from "./PostItem";
import classes from "./Posts.module.css";
import {useSelector} from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

const Posts = (props) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.posts);

	const sumbit = () => {
		dispatch({type: 'ADDCOMMENT', name: 'alex', content: 'loh', postId: 1})
	}
	

	
	return (
		<React.Fragment>
			<button onClick={sumbit}>loh</button>
			<header className={classes.header}>Posts overview</header>
			<ul className={classes.posts}>
				<li>
					{data?.map((item) => (
						<PostItem
							id={item.id}
							key={item.id}
							title={item.title}
							content={item.content}
							data={data}
						/>
					))}
				</li>
			</ul>
		</React.Fragment>
	);
};

export default Posts;
