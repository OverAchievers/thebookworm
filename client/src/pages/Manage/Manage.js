import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import UserIcon from "../../components/UserIcon";
import BookCard from "../../components/BookCard";
import "./Manage.css";

let userSessionEntity;

let userId;

class Manage extends Component {
  state = {
    books : []
  };

  componentDidMount(){
    this.loadBooks();
  };


  loadBooks = userId => {
    userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));
    userId= userSessionEntity.id;
    API.getUserBooks(userId)
    .then(res => {
      this.setState({books:res.data})
    })
    .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

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
         <h2 className="heading">Manage</h2>
          <Col size="lg-12 md-12 sm-12">
            <hr></hr>
          </Col>
        </Row>
      <Row>
          {this.state.books.length ? (
              <Col size="md-12 lg-12">
                <div className="bookStyle">
                  {this.state.books.map(book => (

                      <BookCard book={book} key={book._id} source={"manage"} reload={this.loadBooks}>

                      </BookCard>
                  
                  ))}
                </div>
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
