import "./BookManageModal.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
//The Modal that comes with react-bootstrap has a dependency on bootstrap 3.3.7. Since
//we are using bootstrap 4, the modal does not work. Hence using library react-bootstrap4-modal
// import Modal from 'react-bootstrap/lib/Modal';
//Libraries from react-bootstrap (npm install --save react-bootstrap4-modal )
import Modal from 'react-bootstrap4-modal';
import Button from 'react-bootstrap/lib/Button';
import API from "../../utils/API";
import Manage from "../../pages/Manage";
import {FormGroup, FormControl, ControlLabel, Checkbox} from "react-bootstrap";


class BookManageModal extends Component {
state = {
  id:this.props.book._id,
  notes:""
};
  deleteBook = id => {
    API.deleteBook(id)
    .then(res => {
      console.log("working", this);
      this.props.onClickDelete();
    })
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit=event =>{
    event.preventDefault();
    const bookData={
      id:this.state.id,
      notes: this.state.notes
}
  console.log("bookData "+ bookData);
  API.updateBook(bookData)
  .then(res=>{
    console.log(res.data);
    this.props.onClickBackdrop();
  })
  .catch(err=>console.log(err));
}

    render() {
console.log(this.state);
        return (
            //This modal needs to be enhanced to show more book and donor details
            <Modal {...this.props}>
                <div className="modal-header">
                    <h5 className="modal-title"><strong>{this.props.book.title}</strong></h5>
                </div>
                <div className="modal-body">
                    <p><strong>{this.props.book.author}</strong></p>
                    <p>{this.props.book.desc}</p>
                    <p><strong>Book condition:</strong> {this.props.book.condition}</p>

                    <form>
                      <FormGroup

                      >
                        <ControlLabel><strong>User Notes:</strong></ControlLabel>
                        <FormControl
                          className="inputStyle"
                          name="notes"
                          type="text"
                          value={this.state.notes}
                          placeholder={this.props.book.notes}
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>


</form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={this.props.onClickBackdrop}>
                        Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={()=>{this.deleteBook(this.props.book._id)}}>
                      Delete
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                        Save
                    </button>
                </div>
          </Modal>
        );
    }
}

export default BookManageModal;
