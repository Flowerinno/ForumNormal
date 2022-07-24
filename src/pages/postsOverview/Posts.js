import React from "react";
import PostItem from "./PostItem";
import classes from "./Posts.module.css";
import {useSelector} from "react-redux/es/hooks/useSelector";


const Posts = (props) => {

	const data = useSelector((state) => state.Post.posts);

	// const sumbit = () => {
	// 	dispatch({type: "ADDCOMMENT", name: "alex", content: "loh", postId: 1});
	// };


	return (
		<React.Fragment>
			
			<header className={classes.header}>Posts overview</header>
			{data.length < 1 ? <p style={{fontSize: '20px', textAlign: 'center'}}>No posts found </p>: <ul className={classes.posts}>
				{data?.map((item) => (
					<PostItem
						id={item.id}
						key={item.id}
						title={item.title}
						content={item.enteredContent}
						data={data}
					/>
				))}
			</ul>}
		</React.Fragment>
	);
};

export default Posts;
