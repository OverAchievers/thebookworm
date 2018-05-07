import "./DonateBookCard.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
//Libraries from react-bootstrap (npm install --save react-bootstrap )
import Button from "react-bootstrap/lib/Button";
import BookBrowseModal from "../../components/BookBrowseModal";

class DonateBookCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <div className="book">
        <img
          src={this.props.book_image}
          alt={""}
          className="book-cover"
          width="300"
          height="400px"
        />
        <div className="book-info">
          <p className="book-name">{this.props.title}</p>
          <p className="book-author">{this.props.author}</p>
          <Button bsStyle="primary" onClick={this.props.buttonClick}>
            {this.props.buttonTitle}
          </Button>
        </div>
      </div>
    );
  }
}

export default DonateBookCard;
