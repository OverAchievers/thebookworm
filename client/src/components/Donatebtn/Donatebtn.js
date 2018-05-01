import React from "react";
import "./Donatebtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Donatebtn = props => (

<button className="donate"> <img className="donate-btn" src="https://media.giphy.com/media/8Ds39S2EsepEs/giphy.gif" /> <h5 class="Db">Donate</h5> </button> 



);

export default Donatebtn;
