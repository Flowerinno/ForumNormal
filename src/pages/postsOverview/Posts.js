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
		axios
			.get("http://138.68.77.210:8000/api/posts", {
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			})
			.then(function (response) {
				const data = response.data.posts;
				dispatch({type: "SETPOSTS", posts: data});
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
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
								data={data}
							/>
						))}
					</li>
				</ul>
			)}
		</div>
	);
};

export default Posts;
