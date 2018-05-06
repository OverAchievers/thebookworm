import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import DonateBookCard from "../../components/DonateBookCard";
import IsbnSearch from "../../components/IsbnSearch";
import Barcode from "react-barcode";

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
      isbnClicked: false
    };
    this.searchClicked = this.searchClicked.bind(this);
  }

  clearState = () => {
    this.setState({
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
      isbnClicked: false
    });
  };

  searchClicked() {
    this.setState({
      isbnClicked: true
    });
  }

  searchClick = event => {
    event.preventDefault();
    this.handleFormSubmit();
    this.searchClicked();
  };

  componentDidMount() {}

  editThumbnail() {
    this.setState;
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    API.getBook(this.state.search)
      .then(response =>
        this.setState({
          isbn:
            response.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
          title: response.data.items[0].volumeInfo.title,
          subtitle: response.data.items[0].volumeInfo.subtitle,
          author: response.data.items[0].volumeInfo.authors,
          desc: response.data.items[0].volumeInfo.description,
          bookImage:
            response.data.items[0].volumeInfo.imageLinks.thumbnail +
            "&fife=w200-h300",
          pages: response.data.items[0].volumeInfo.pageCount
        })
      )
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
        .then(res => this.clearState())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Container fluid>
          <h1>Donate Page</h1>
          <IsbnSearch
            handleFormSubmit={this.searchClick}
            handleInputChange={this.handleInputChange}
          />
          {this.state.isbnClicked ? (
            <DonateBookCard
              bookImage={this.state.bookImage}
              author={this.state.author}
              title={this.state.title}
              buttonTitle={"Donate Book"}
              buttonClick={this.postBookDB}
            />
          ) : null}
          <Barcode value={this.state.search} />
        </Container>
      </div>
    );
  }
}

export default Donate;
