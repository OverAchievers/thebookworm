import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Profile extends Component {
  state = {
  };
  
  componentDidMount() {
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="ml-10">
            <h1>Profile Page</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
