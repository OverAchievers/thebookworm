import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";

class Browse extends Component {
  state = {
    books: [],
    searchString: "",
    searchContext: "any"
  };

  componentDidMount() {
    this.loadBooks(null, this.state.searchContext);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("search string is: " + value);
    this.setState({
      [name]: value
    });
    this.loadBooks(value, this.state.searchContext);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console(this.stage.searchString);
    this.loadBooks(this.state.searchString, this.state.searchContext);
  };

  loadBooks = (searchString, searchContext) => {
    console.log("in loadbooks method");
    API.searchBook(searchString, searchContext)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-12 sm-12">
            <form className="form-inline">
              <input onChange={this.handleInputChange} name="searchString" value={this.state.searchString} placeholder="Search"></input>
            </form>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          {this.state.books.length ? (
            <Col size="md-12 lg-12">
              {this.state.books.map(book => (
                <BookCard book={book} key={book._id}></BookCard>
              ))}
            </Col>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Row>
        <div className="push"></div>
      </Container>
    );
  }
}

export default Browse;
