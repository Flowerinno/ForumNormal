import {useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import classes from "./MyProfile.module.css";
import {save} from "../../store/actions";
import getBase64 from "../../services/ImageService";

const MyProfile = () => {
	const [base64, setBase64] = useState();
	const nameInputRef = useRef();

	const dispatch = useDispatch();

	const saveHandler = () => {
		const userImage = base64;
		const userName = nameInputRef.current.value;
		dispatch({type: "SAVE", userName, userImage});
	};
	const logoutHandler = () => {
		dispatch({type: "LOGOUT"});
	};

	const handleFileInputChange = (e) => {
		console.log(e.target.files[0]);

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
		<div className={classes.overall}>
			<form className={classes.form}>
				<img src={enteredImage} alt="Card cap" />
				<div>
					<input
						type="text"
						ref={nameInputRef}
						placeholder="Change your name"
					/>
					<input
						id="avatar-change"
						name="avatar-change"
						type="file"
						onChange={handleFileInputChange}
						hidden
					/>
					<label htmlFor="avatar-change">Change your avatar</label>
					<div className={classes.buttons}>
						<button className={classes.button1} onClick={saveHandler}>
							Save
						</button>
						<button className={classes.button2} onClick={logoutHandler}>
							Logout
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default MyProfile;
