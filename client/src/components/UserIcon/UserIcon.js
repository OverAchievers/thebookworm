import React from "react";
import "./UserIcon.css";

const UserIcon = props => (
    <div className="iconContainer">
        <div>
            <img className="icon" src={"http://www.freelogovectors.net/wp-content/uploads/2013/02/Bookworm_128x128-32.png"} alt=""/>
        </div>
        <div>    
            {/* I am not sure how this will work */}
            <span className="helloUser">Hello userName{props.userName}!</span> 
        </div>
    </div>
);

export default UserIcon;