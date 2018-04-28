import React, { Component } from "react";
import "./DonateInputBox.css";
import { Col, Row, Container } from "../../components/Grid";
import Barcode from "react-barcode";
import axios from "axios";

class DonateInputBox extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.props.onSubmit && typeof this.props.onSubmit === "function") {
      this.props.onSubmit(this.state.value);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="input-group mb-3 mx-auto">
            <input
              type="text"
              value={this.state.value}
              className="form-control"
              placeholder="Enter ISBN#"
              aria-label="Enter ISBN#"
              aria-describedby="basic-addon2"
              onChange={this.handleInputChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </Row>
        <Row>
          <Barcode value={this.state.value} />
        </Row>
      </Container>
    );
  }
}

export default DonateInputBox;
