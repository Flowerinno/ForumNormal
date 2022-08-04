import {useRef, useState, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import classes from "./MyProfile.module.css";
import getBase64 from "../../services/ImageService";
import axios from "axios";

const MyProfile = () => {
	const [base64, setBase64] = useState();

	const nameInputRef = useRef();

	const dispatch = useDispatch();

	const saveHandler = () => {
		const avatar = base64;
		const username = nameInputRef.current.value;
		const userToken = localStorage.getItem("userToken");
		dispatch({ type: "SAVE_USER_DATA", avatar: avatar, username: username})
		nameInputRef.current.value = "";
	};
	const logoutHandler = () => {
		localStorage.removeItem("userToken");
		dispatch({type: "LOGOUT"});
	};

	const handleFileInputChange = (e) => {
		let file = e.target.files[0];

		getBase64(file)
			.then((result) => {
				file["base64"] = result;
				setBase64(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const enteredImage = useSelector((state) => state.User.image);

	return (
		<div className={classes.profile}>
			<h2>My Profile</h2>
			<div className={classes.profileInput}>
				<img src={enteredImage} alt="" />
				<input type="text" ref={nameInputRef} placeholder="Change your name" />
				<input
					type="file"
					onChange={handleFileInputChange}
					id="avatar-change"
					name="avatar-change"
					hidden
				/>
				<label htmlFor="avatar-change"> Click to change your avatar </label>
			</div>
			<div className={classes.profileButton}>
				<button onClick={saveHandler}>Save</button>
				<button onClick={logoutHandler}>Logout</button>
			</div>
		</div>
	);
};

export default MyProfile;
