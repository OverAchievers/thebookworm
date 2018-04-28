import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import DonateInputBox from "../../components/DonateInputBox";
import BookCard from "../../components/BookCard";




class Donate extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="ml-6">
            <h1>Donate Page</h1>
            <DonateInputBox />
            <BookCard
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Donate;
