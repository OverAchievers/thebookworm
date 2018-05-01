import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Donatebtn from "../../components/Donatebtn";
import Browsebtn from "../../components/Browsebtn";
import "./Home.css";


const Home = () => (
  <Container fluid>
    <Row id="button-row">
     <Container>
        <h2 className="heading"> Home Page
           </h2>
           </Container>
    
          <Browsebtn />
         

          
          <Donatebtn /> 
        </Row>
  </Container>

);
     
     
  
  
    

export default Home;
