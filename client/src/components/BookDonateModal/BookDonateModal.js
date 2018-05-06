import "./BookDonateModal.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
//The Modal that comes with react-bootstrap has a dependency on bootstrap 3.3.7. Since
//we are using bootstrap 4, the modal does not work. Hence using library react-bootstrap4-modal
// import Modal from 'react-bootstrap/lib/Modal';
//Libraries from react-bootstrap (npm install --save react-bootstrap4-modal )
import Modal from "react-bootstrap4-modal";
import Button from "react-bootstrap/lib/Button";
import DeleteBtn from "../../components/DeleteBtn";
import Manage from "../../pages/Manage";
import API from "../../utils/API";
import DonateBookCard from "../../components/DonateBookCard";

class BookDonateModal extends Component {
  deleteBook = id => {
    API.deleteBook(id).catch(err => console.log(err));
  };
  render() {
    return; //This modal needs to be enhanced to show more book and donor details
    <Modal>
      <div className="modal-header">
        <h5 className="modal-title">{this.props.title}</h5>
      </div>
      <div className="modal-body">
        {/* <DonateBookCard
          bookImage={this.state.bookImage}
          author={this.state.author}
          title={this.state.title}
          buttonTitle={"Donate Book"}
          buttonClick={this.postBookDB}
        /> */}
        <p>{this.props.author}</p>
        <p>{this.props.desc}</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.props.onClickBackdrop}
        >
          Cancel
        </button>
        <DeleteBtn onClick={this.deleteBook(this.props._id)} />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.props.onHide}
        >
          Edit
        </button>
      </div>
    </Modal>;
  }
}

export default BookDonateModal;
