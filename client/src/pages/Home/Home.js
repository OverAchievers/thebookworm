import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Donatebtn from "../../components/Donatebtn";
import Browsebtn from "../../components/Browsebtn";
import "./Home.css";


class Home extends Component {
  state = {
  };
  
  componentDidMount() {
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <h6 className="home-page">Home Page</h6>
            <Browsebtn />
            <Donatebtn />
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default Home;
