import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBCol,
	MDBRow,
	MDBIcon,
	MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
	return (
		<MDBFooter className="bg-white text-center text-white">
			<MDBContainer className="fixed-bottom">
				<section className="mb-4">
                         <MDBBtn outline color="black" floating className='m-1' href='https://twitter.com/dreamfall10' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn> 
          <MDBBtn outline color="black" floating className='m-1' href='https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BA%D0%BE%D0%BD%D0%BE%D0%BD%D0%BE%D0%B2-56b804222/' role='button'>
            <MDBIcon fab icon='linkedin' />
          </MDBBtn>
          <MDBBtn outline color="black" floating className='m-1' href='https://github.com/Flowerinno' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
			</MDBContainer>

			<div
				className="fixed-bottom "
				style={{backgroundColor: "black"}}
			>
				© 2022 russia is a terrorist state
			</div>
		</MDBFooter>
	);
}
