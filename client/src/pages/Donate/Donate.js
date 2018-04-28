import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import DonateInputBox from "../../components/DonateInputBox";
import NateCard from "../../components/NateCard";

class Donate extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  componentDidMount() {}

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBook(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="ml-6">
            <h1>Donate Page</h1>
            <DonateInputBox />
            <NateCard
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
