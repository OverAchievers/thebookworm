import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import BookCard from "../../components/BookCard";
import UserIcon from "../../components/UserIcon";
import "./Manage.css";
import books from "../../books.json"; // This is for Temporary Cards

class Manage extends Component {
  state = {
    books
  };
  
removeBook = id => {
    // Filter this.state.books for books with an id not equal to the id being removed
    const books = this.state.books.filter(book => book.id !== id);
    // Set this.state.books equal to the new books array
    this.setState({ books });
  };

  // componentDidMount() {
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="ml-10">
            <span className="pageTitle">Manage Your Books</span>
            <UserIcon />
            {this.state.books.map(book => (
               <BookCard
                 removeBook={this.removeBook}
                 id={book.id}
                 key={book.id}
                 author={book.author}
                 title={book.title}
                />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manage;
