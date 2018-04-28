// import React from "react";
import React, { Component } from "react";
import "./DonateInputBox.css";
import { Col, Row, Container } from "../../components/Grid";
import Barcode from "react-barcode";
import axios from "axios";
var createClass = require('create-react-class');


class DonateInputBox extends Component {
    // Setting the component's initial state
    state = {
        value: "",
    };

    handleInputChange = event => {
        this.setState({ value: event.target.value });
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
                            <button className="btn btn-outline-secondary" type="button">Search</button>
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
