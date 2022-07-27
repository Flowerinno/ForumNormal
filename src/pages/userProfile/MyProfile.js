import {useRef, useState, useCallBack} from "react";
import {useSelector, useDispatch} from "react-redux";
import classes from "./MyProfile.module.css";
import getBase64 from "../../services/ImageService";
import axios from "axios";
import {useCallback} from "react";
const MyProfile = () => {
	const [base64, setBase64] = useState();

	const nameInputRef = useRef();

	const dispatch = useDispatch();

	const saveHandler = useCallback(() => {
		const avatar = base64;
		const username = nameInputRef.current.value;

		axios
			.put("http://138.68.77.210:8000/my-profile", {
				username: username,
				avatar: avatar,
			})
			.then(function (response) {
				console.log(response);
				dispatch({type: "SAVE", loginName: username, userImage: avatar});
			})
			.catch(function (error) {
				console.log(error);
			});
		nameInputRef.current.value = "";
	}, [base64, dispatch]);
	const logoutHandler = () => {
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
