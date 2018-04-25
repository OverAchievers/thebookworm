import React from "react";
import "./DonateBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DonateBtn = props => (
  // <span className="donate-btn" {...props}>
    
  // </span>
  <div>
        <button type="button" className="donate-btn btn-sm">Browse</button>
    </div>

);

export default DonateBtn;
