import {useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./MyProfile.module.css";
import { Button } from 'react-bootstrap';
import getBase64 from "../../services/ImageService";


// todo: remove
const classes = {
	
};


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
		<div id='my-profile-content' className={classes.overall}>
			<Button>JOPA</Button>
				<div>
					<img src={enteredImage} alt="Card cap" />
					<input
						type="text"
						ref={nameInputRef}
						placeholder="Change your name"
					/>
					<input
						type="file"
						onChange={handleFileInputChange}
						id='avatar-change'
						name='avatar-change'
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

		</div>
	);
};

export default MyProfile;
