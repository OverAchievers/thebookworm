import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import BookCard from "../../components/BookCard";
import IsbnSearch from "../../components/IsbnSearch";
import Barcode from "react-barcode";



class Donate extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    isbn: "",
    title: "",
    subtitle: "",
    author: "",
    desc: "",
    book_image: "",
    pages: "",
    condition: "",
    notes: "",
    user: "",
  };

  componentDidMount() { }

  editThumbnail() {
    this.setState
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBook(this.state.search)
      .then(response => this.setState({
        // results: res.data
        isbn: response.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
        title: response.data.items[0].volumeInfo.title,
        subtitle: response.data.items[0].volumeInfo.subtitle,
        author: response.data.items[0].volumeInfo.authors,
        desc: response.data.items[0].volumeInfo.description,
        book_image: response.data.items[0].volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=2"),
        pages: response.data.items[0].volumeInfo.pageCount,
      }))
      .catch(err => console.log(err));
  }

  postBookDB = event => {
    event.preventDefault();
    const bookData = {
      isbn: this.state.isbn,
      title: this.state.title,
      subtitle: this.state.subtitle,
      author: this.state.author,
      desc: this.state.desc,
      book_image: this.state.book_image,
      pages: this.state.pages,
      condition: null,
      notes: null,
      user: null
    }; console.log(bookData);
    API.donateBook(
      bookData
    )
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <Container fluid>
          <h1>Donate Page</h1>
          <IsbnSearch
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Barcode value={this.state.search} />
          <BookCard
            bookImage={this.state.book_image}
            author={this.state.author}
            title={this.state.title}

          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.postBookDB}>
            Donate Book
          </button>
        </Container>
      </div >
    );
  }
}

export default Donate;
