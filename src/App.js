import MainHeader from "./UI/MainHeader";
import LoginPage from "./pages/LoginPage";
import {Route, Redirect, Switch} from "react-router-dom";
import {useSelector} from "react-redux/es/exports";
import PostsOverview from "./pages/PostsOverview";
import UserProfile from "./pages/UserProfile";
import NewPostForm from "./pages/NewPostForm";

function App() {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	
	return (
		<div className="body">
			<div>
				<MainHeader />
			</div>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/login" />
				</Route>
				{!isLoggedIn && (
					<Route path="/login" exact>
						<LoginPage />
					</Route>
				)}
				{isLoggedIn && (
					<Route path="/posts-overview" exact>
						<PostsOverview />
					</Route>
				)}
				{isLoggedIn && (
					<Route path="/user-profile" exact>
						<UserProfile />
					</Route>
				)}
				{isLoggedIn && (
					<Route path="/new-post">
						<NewPostForm />
					</Route>
				)}
			</Switch>
		</div>
	);
}

export default App;
