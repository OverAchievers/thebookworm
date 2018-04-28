import "./NateCard.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";

class NateCard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="book">
            <img
              src={"http://i.imgur.com/lWTEoAS.jpg"}
              alt={"Harry Potter and the Order of the Phoenix Book Cover"}
              className="book-cover"
              width="300"
              height="400px"
            />
            <div className="book-info">
              <div className="book-tags">
                <span className="book-tag">Magic</span>
                <span className="book-tag book-tag--year">2007</span>
              </div>
              <p className="book-name">
                Harry Potter and the Order of the Phoenix
              </p>
              <p className="book-author">J.K. Rowling</p>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default NateCard;
