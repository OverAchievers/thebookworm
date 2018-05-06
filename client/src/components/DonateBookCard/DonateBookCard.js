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
      browseModalShow: false,
      manageModalShow: false
    };
  }

  render() {
    return (
      <div>
        <div className="book">
          <img
            src={this.props.bookImage}
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
        <form>
          <div className="form-group">
            <label for="condition">Condition</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>New</option>
              <option>Used - Like New</option>
              <option>Used - Very Good</option>
              <option>Used - Good</option>
              <option>Used - Acceptable</option>
              <option>Unacceptable</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Notes</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default DonateBookCard;
