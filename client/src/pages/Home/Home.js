import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Donatebtn from "../../components/Donatebtn";
import Browsebtn from "../../components/Browsebtn";
import "./Home.css";


const Home = () => (
  <div>
    <Col size="md-12">
      <Browsebtn />
      <Donatebtn />
    </Col>
  </div>
);






export default Home;
