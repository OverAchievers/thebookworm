import "./BookManageModal.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
//The Modal that comes with react-bootstrap has a dependency on bootstrap 3.3.7. Since
//we are using bootstrap 4, the modal does not work. Hence using library react-bootstrap4-modal
// import Modal from 'react-bootstrap/lib/Modal';
//Libraries from react-bootstrap (npm install --save react-bootstrap4-modal )
import Modal from 'react-bootstrap4-modal';
import Button from 'react-bootstrap/lib/Button';

class BookManageModal extends Component {
  // closeModal = (e) => e.preventDefault();

    render() {
        return (
            //This modal needs to be enhanced to show more book and donor details
            <Modal {...this.props}>
                <div className="modal-header">
                    <h5 className="modal-title">testing</h5>
                </div>
                <div className="modal-body">
                    <p>{this.props.book.author}</p>
                    <p>{this.props.book.desc}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.props.onClickBackdrop}>
                        Close
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={this.props.onHide}>
                        Delete
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={this.props.onHide}>
                        Edit
                    </button>
                </div>
          </Modal>
        );
    }
}

export default BookManageModal;
