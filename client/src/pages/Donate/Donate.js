import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import DonateBookCard from "../../components/DonateBookCard";
import IsbnSearch from "../../components/IsbnSearch";
import Barcode from "react-barcode";
import BookDonateModal from "../../components/BookDonateModal";

class Donate extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      error: "",
      isbn: "",
      title: "",
      subtitle: "",
      author: "",
      desc: "",
      bookImage: "",
      pages: "",
      condition: "",
      notes: "",
      user: "",
      isbnClicked: false,
      browseModalShow: false,
      manageModalShow: false
    };
    this.searchClicked = this.searchClicked.bind(this);
  };

  searchClicked() {
    this.setState({
      isbnClicked: true
    });
  };

  tryStuff = () => {
    this.props.source === "donate" ?
      (
        this.setState({ browseModalShow: true })
      ) : (
        this.setState({ manageModalShow: true })
      )
  };

  searchClick = event => {
    event.preventDefault();
    // this.handleFormSubmit();
    // this.searchClicked();
    this.tryStuff();
  };

  componentDidMount() { }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    API.getBook(this.state.search)
      .then(response => this.setState({
        isbn: response.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
        title: response.data.items[0].volumeInfo.title,
        subtitle: response.data.items[0].volumeInfo.subtitle,
        author: response.data.items[0].volumeInfo.authors,
        desc: response.data.items[0].volumeInfo.description,
        bookImage: response.data.items[0].volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=2"),
        pages: response.data.items[0].volumeInfo.pageCount,
      }))
      .catch(err => console.log(err));
  };

  postBookDB = event => {
    event.preventDefault();
    if (this.state.title) {
      API.donateBook({
        isbn: this.state.isbn,
        title: this.state.title,
        subtitle: this.state.subtitle,
        author: this.state.author,
        desc: this.state.desc,
        bookImage: this.state.bookImage,
        pages: this.state.pages,
        condition: null,
        notes: null,
        user: null
      })
        .then(res => this.clearState()
        )
        .catch(err => console.log(err));
    }
  };


  render() {

    let browseModalOpen = () => this.setState({ browseModalShow: true });
    let browseModalClose = () => this.setState({ browseModalShow: false });
    let manageModalOpen = () => this.setState({ manageModalShow: true });
    let manageModalClose = () => this.setState({ manageModalShow: false });



    return (
      <div>
        <Container fluid>
          <h1>Donate Page</h1>
          <IsbnSearch
            handleFormSubmit={this.searchClick}
            handleInputChange={this.handleInputChange}
          />

          {this.props.source === "donate" ? (
            <BookDonateModal visible={this.state.browseModalShow} onClickBackdrop={browseModalClose} book={this.props.book} />
          ) : (
              <BookDonateModal visible={this.state.manageModalShow} onClickBackdrop={manageModalClose} book={this.props.book} />
            )}
          {this.state.isbnClicked ?
            <DonateBookCard
              bookImage={this.state.bookImage}
              author={this.state.author}
              title={this.state.title}
              buttonTitle={"Donate Book"}
              buttonClick={this.postBookDB}
            /> : null}
          <Barcode value={this.state.search} />
        </Container>
      </div >
    );
  }
}

export default Donate;