import React from "react";
import "./Donatebtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Donatebtn = props => (
	
		<div className="div-class">
		 <h4 className="donate-para">Want to donate a book?</h4>
		<a className="donate" onClick={() => props.whenClicked('/donate')}>
		<img
		    src={"https://media.giphy.com/media/8Ds39S2EsepEs/giphy.gif"}
		    alt={"Book gif"}
		    className="donate-btn" />
		   
			<h5 className="Db">Donate</h5>
 </a>	
 </div>




);

export default Donatebtn;
