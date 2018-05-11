import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import Donatebtn from "../../components/Donatebtn";
import Browsebtn from "../../components/Browsebtn";
import "./Home.css";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  
    this.state={
      redirect: false,
      redirectUrl: null
    }
  };

  redirectTo = (url) => {
    if(sessionStorage.getItem("userSessionEntity") !== null){
      this.setState({
        redirect: true,
        redirectUrl: url
      });
    }
  };
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirectUrl} />
    }
  };

  render() {
    return (
      <Container fluid>
          <h2 className="heading">Home</h2>
        {this.renderRedirect()}
        <Row id="button-row">
              <Browsebtn whenClicked={this.redirectTo}/>
              <Donatebtn whenClicked={this.redirectTo}/> 
            </Row>
      </Container>
    )
  }

}





export default Home;
