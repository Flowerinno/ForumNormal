import MainHeader from "./UI/MainHeader";
import LoginPage from "./pages/login/LoginPage";
import {Route, Redirect, Switch} from "react-router-dom";
import {useSelector} from "react-redux/es/exports";
import PostsOverview from "./pages/postsOverview/PostsOverview";
import UserProfile from "./pages/userProfile/UserProfile";
import NewPostForm from "./pages/newPost/NewPostForm";
import LoggingObserver from "./components/LoggingObserver";
import SignupPage from "./pages/singup/SignupPage";
import Footer from "./UI/Footer";

function App() {
	const isLoggedIn = useSelector((state) => state.User.isLoggedIn);

	return (
		<div>
			<LoggingObserver />
			<div>
				<MainHeader />
			</div>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/signup" />
				</Route>

				<Route path="/signup" exact>
					<SignupPage />
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
			<Footer />
		</div>
	);
}

export default App;
