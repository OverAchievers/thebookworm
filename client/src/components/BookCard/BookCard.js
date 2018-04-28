import React from "react";
import "./BookCard.css";

const BookCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"}/>
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Title:</strong>
                    {props.title}
                </li>
                <li>
                    <strong>Author:</strong>
                    {props.author}
                </li>
            </ul>
        </div>
        <span onClick={() => props.removeBook(props.id)} className="remove">𝘅</span>
    </div>
);

export default BookCard;