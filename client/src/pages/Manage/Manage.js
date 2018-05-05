import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";

class Manage extends Component {
  state = {
    books : []
  };

componentDidMount(){
  this.loadBooks();
};

loadBooks = userId => {
  API.getUserBooks("5aea5ade6248920a857a92af")
  .then(res => {
    this.setState({books:res.data})
  })
  .catch(err => console.log(err));
};

// handleInputChange = event => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
// };


render() {
  return (
    <Container fluid>
      <Row>
        <Col size="lg-12 md-12 sm-12">
          <hr></hr>
        </Col>
      </Row>
      <Row>
        {this.state.books.length ? (
          <Col size="md-12 lg-12">
            {this.state.books.map(book => (
              <BookCard book={book} key={book._id} source={"manage"}></BookCard>
            ))}
          </Col>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Row>
      <div className="push"></div>
    </Container>
  );
};
};
export default Manage;
