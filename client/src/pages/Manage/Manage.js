import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import UserIcon from "../../components/UserIcon";
import BookCard from "../../components/BookCard";


class Manage extends Component {
  state = {
    books : []
  };

componentDidMount(){
  this.loadBooks()
};

loadBooks = userId => {
  API.getUserBooks("5ae7c15591c8bf04aefc9be8")
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

export default Manage;
