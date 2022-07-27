import React from "react";
import PostItem from "./PostItem";
import classes from "./Posts.module.css";
import {useSelector} from "react-redux/es/hooks/useSelector";

const Posts = (props) => {
	const data = useSelector((state) => state.Post.posts);

	return (
		<div className={classes.posts}>
			<h2>Posts overview</h2>
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
								content={item.enteredContent}
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
