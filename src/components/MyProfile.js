import { useSelector } from "react-redux";




const MyProfile = () => {
	const enteredImage = useSelector((state) => state.image);
	return (
		<div className="card" >
			<img className="card-img-top" src={enteredImage} alt="Card cap" style={{width: '80px'}} />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
			</div>
		</div>
	);
};

export default MyProfile;
