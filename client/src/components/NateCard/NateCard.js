import "./NateCard.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Button from 'react-bootstrap/lib/Button';
import BookBrowseModal from "../../components/BookBrowseModal";

class NateCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      browseModalShow: false,
      manageModalShow: false
    };
  };

  render() {

    // let browseModalOpen = () => this.setState({ browseModalShow: true });
    // let browseModalClose = () => this.setState({ browseModalShow: false });
    // let manageModalOpen = () => this.setState({ manageModalShow: true });
    // let manageModalClose = () => this.setState({ manageModalShow: false });

    return (
      <div className="book">
        <img
          src={this.state.book_image}
          alt={""}
          className="book-cover"
          width="300"
          height="400px"
        />
        <div className="book-info">
          <div className="book-tags">
            <span className="book-tag">Magic</span>
            <span className="book-tag book-tag--year">2007</span>
          </div>
          <p className="book-name">
            {this.state.title}
          </p>
          <p className="book-author">
            {this.state.author}
          </p>
          {/* <Button
            bsStyle="primary"
            // onClick={() => this.setState({ modalShow: true })}
            onClick={browseModalOpen}>
            Details
          </Button> */}
        </div>
        {/* <BookBrowseModal visible={this.state.browseModalShow} onClickBackdrop={browseModalClose} book={this.props.book} /> */}
      </div>
    );
  }
}

export default NateCard;
