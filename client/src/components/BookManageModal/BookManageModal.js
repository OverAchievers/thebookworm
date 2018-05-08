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


class BookManageModal extends Component {
  deleteBook = id => {
    API.deleteBook(id)
    .then(res => {
      console.log("working", this);
      this.props.onClickDelete();
    })
      .catch(err => console.log(err));
  };
  showUserMobileInfo = () => {
      if(this.props.book.user){
          if(this.props.book.user.share_phone){
              return <p>Mobile: {this.props.book.user.phone}</p>
          } else{
              return null;
          }
      } else{
          return null;
      }
  }

  showUserAddressInfo = () => {
      if(this.props.book.user){
          if(this.props.book.user.address && this.props.book.user.share_address){
              return <p>Address:<br />{this.props.book.user.address.addr_line_1}<br />{this.props.book.user.address.addr_line_2}<br />{this.props.book.user.address.city},{this.props.book.user.address.state} - {this.props.book.user.address.zipcode}</p>;
          } else{
              return null;
          }
      } else{
          return null;
      }
  }
    render() {

        return (
            //This modal needs to be enhanced to show more book and donor details
            <Modal {...this.props}>
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.book.title}</h5>
                </div>
                <div className="modal-body">
                    <p>{this.props.book.author}</p>
                    <p>{this.props.book.desc}</p>
                    <p>Book condition:{this.props.book.condition}</p>
                    <p>User notes:{this.props.book.notes}</p>
                    {this.showUserMobileInfo()}
                    {this.showUserAddressInfo()}

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.props.onClickBackdrop}>
                        Close
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={()=>{this.deleteBook(this.props.book._id)}}>
                      Delete
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Edit
                    </button>
                </div>
          </Modal>
        );
    }
}

export default BookManageModal;
