import React from "react";
import PostItem from "./PostItem";
import classes from "./Posts.module.css";
import {useSelector} from "react-redux/es/hooks/useSelector";
import {useDispatch} from "react-redux/es/exports";
import axios from "axios";
import {useEffect} from "react";

const Posts = (props) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.Post.posts);
	const userToken = localStorage.getItem("userToken");
	useEffect(() => {
		dispatch({type: "FETCH_POSTS"});
	}, []);
	return (
		<div className={classes.posts}>
			{data.length < 1 ? (
				<p>No posts found </p>
			) : (
				<ul>
					<li>
						{data?.map((item) => (
							<PostItem
								id={item.id}
								key={item.id}
								title={item.title}
								content={item.content}
								username={item.username}
								avatar={item.avatar}
								authorId={item.authorId}
								time={item.createdAt}
							/>
						))}
					</li>
				</ul>
			)}
		</div>
	);
};

export default Posts;
