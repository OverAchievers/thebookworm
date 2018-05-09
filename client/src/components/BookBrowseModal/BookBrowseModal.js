import "./BookBrowseModal.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
//The Modal that comes with react-bootstrap has a dependency on bootstrap 3.3.7. Since
//we are using bootstrap 4, the modal does not work. Hence using library react-bootstrap4-modal
// import Modal from 'react-bootstrap/lib/Modal';
//Libraries from react-bootstrap (npm install --save react-bootstrap4-modal )
import Modal from 'react-bootstrap4-modal';
import Button from 'react-bootstrap/lib/Button';

class BookBrowseModal extends Component {
    showUserMobileInfo = () => {
        if(this.props.book.user){
            if(this.props.book.user.share_phone){
                return <p><strong>Mobile:</strong> {this.props.book.user.phone}</p>
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
                return <p><strong>Address:</strong><br />{this.props.book.user.address.addr_line_1}<br />{this.props.book.user.address.addr_line_2}<br />{this.props.book.user.address.city},{this.props.book.user.address.state} - {this.props.book.user.address.zipcode}</p>;
            } else{
                return null;
            }
        } else{
            return null;
        }
    }

    render() {
       
        return (
            <Modal {...this.props} dialogClassName="your-dialog-classname">
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.book.title}</h5>
                </div>
                <div className="modal-body">
                    <p><strong>Author:</strong> {this.props.book.author}</p>
                    <p><strong>ISBN:</strong> {this.props.book.isbn}</p>
                    <p>{this.props.book.desc}</p>
                    <hr></hr>
                    <p><strong>Book condition:</strong> {this.props.book.condition}</p>
                    <p><strong>User notes:</strong> {this.props.book.notes}</p>
                    <p><strong>User email:</strong> {this.props.book.user ? this.props.book.user.email : "-"}</p>
                    {this.showUserMobileInfo()}
                    {this.showUserAddressInfo()}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
          </Modal>
        );
    }
}

export default BookBrowseModal;
