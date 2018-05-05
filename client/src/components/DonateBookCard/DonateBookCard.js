import "./DonateBookCard.css";
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
//Libraries from react-bootstrap (npm install --save react-bootstrap )
import Button from 'react-bootstrap/lib/Button';
import BookDonateModal from "../../components/BookDonateModal";

class DonateBookCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            browseModalShow: false,
            manageModalShow: false
        };
    };

    render() {

        let browseModalOpen = () => this.setState({ browseModalShow: true });
        let browseModalClose = () => this.setState({ browseModalShow: false });
        let manageModalOpen = () => this.setState({ manageModalShow: true });
        let manageModalClose = () => this.setState({ manageModalShow: false });

        return (
            <div className="book">
                <img
                    src={this.props.bookImage}
                    alt={""}
                    className="book-cover"
                    width="300"
                    height="400px" />
                <div className="book-info">
                    <p className="book-name">
                        {this.props.title}
                    </p>
                    <p className="book-author">{this.props.author}</p>
                    <Button
                        bsStyle="primary"
                        // onClick={() => this.setState({ modalShow: true })}
                        onClick={this.props.buttonClick}>                    >
                        {this.props.buttonTitle}
                    </Button>
                </div>
                {this.props.source === "browse" ? (
                    <BookDonateModal visible={this.state.browseModalShow} onClickBackdrop={browseModalClose} book={this.props.book} />
                ) : (
                        <BookDonateModal visible={this.state.browseModalShow} onClickBackdrop={browseModalClose} book={this.props.book} />
                    )}
            </div>
        );
    }
}

export default DonateBookCard;
