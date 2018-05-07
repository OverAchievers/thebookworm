import "./BookCard.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//Libraries from react-bootstrap (npm install --save react-bootstrap )
import Button from 'react-bootstrap/lib/Button';
import BookBrowseModal from "../../components/BookBrowseModal";
import BookManageModal from "../../components/BookManageModal";

class BookCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      browseModalShow: false,
      manageModalShow: false,
      redirect: false
    };
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={"/Manage"} />
    }
  };

  tryStuff = () => {
    this.props.source === "browse" ?
    (
      this.setState({browseModalShow:true})
    ) : (
      this.setState({manageModalShow:true})
    )};
    render() {

      let browseModalOpen = () => this.setState({ browseModalShow: true });
      let browseModalClose = () => this.setState({ browseModalShow: false });
      let manageModalOpen = () => this.setState({ manageModalShow: true });
      let manageModalClose = () => this.setState({ manageModalShow: false });
      let redirectAfterDelete = () => {
        console.log("In ewdirectFTERDELETE");
        // this.setState({ manageModalShow:false });
        this.props.reload();
      }


      return (
        <div className="book">
        {this.renderRedirect()}
        <img
        src={this.props.book.book_image}
        alt={""}
        className="book-cover"
        width="300"
        height="400px" />
        <div className="book-info">
        <p className="book-name">
        {this.props.book.title}
        </p>
        <p className="book-author">{this.props.book.author}</p>
        <Button
        bsStyle="primary"
        // onClick={() => this.setState({ modalShow: true })}
        onClick={this.tryStuff}>
        Details
        </Button>
        </div>
        {this.props.source === "browse" ? (
          <BookBrowseModal visible={this.state.browseModalShow} onClickBackdrop={browseModalClose} book={this.props.book} />
        ) : (
          <BookManageModal visible={this.state.manageModalShow} onClickDelete={redirectAfterDelete} onClickBackdrop={manageModalClose} book={this.props.book} />
        )}
        </div>
      );

    }
  }

  export default BookCard;
