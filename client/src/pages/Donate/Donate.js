import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import DonateBookCard from "../../components/DonateBookCard";
import IsbnSearch from "../../components/IsbnSearch";
import Barcode from "react-barcode";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Button from "react-bootstrap/lib/Button";
import "./Donate.css";

class Donate extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      error: "",
      isbn: "",
      title: "",
      subtitle: "",
      author: "",
      desc: "",
      book_image: "",
      pages: "",
      condition: "",
      notes: "",
      user: "",
      isbnClicked: false,
      width: .7,
      height: 65
    };
    this.searchClicked = this.searchClicked.bind(this);
  }

  clearState = () => {
    this.setState({
      search: "",
      error: "",
      isbn: "",
      title: "",
      subtitle: "",
      author: "",
      desc: "",
      book_image: "",
      pages: "",
      condition: "",
      notes: "",
      user: "",
      isbnClicked: false
    });
  };

  searchClicked() {
    this.setState({
      isbnClicked: true
    });
  }

  searchClick = event => {
    event.preventDefault();
    this.handleFormSubmit();
    this.searchClicked();
  };

  currentUserId() {
    let userId = JSON.parse(sessionStorage.userSessionEntity);
    this.setState({
      user: userId.id
    })
  };

  componentDidMount() {
    this.currentUserId();
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleTextConditionChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    API.getBook(this.state.search)
      .then(response =>
        this.setState({
          isbn:
            response.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
          title: response.data.items[0].volumeInfo.title,
          subtitle: response.data.items[0].volumeInfo.subtitle,
          author: response.data.items[0].volumeInfo.authors,
          desc: response.data.items[0].volumeInfo.description,
          book_image:
            response.data.items[0].volumeInfo.imageLinks.thumbnail + "&fife=w200-h300",
          pages: response.data.items[0].volumeInfo.pageCount
        })
      )
      .catch(err => console.log(err));
  };

  postBookDB = event => {
    event.preventDefault();
    if (this.state.title) {
      API.donateBook({
        isbn: this.state.isbn,
        title: this.state.title,
        subtitle: this.state.subtitle,
        author: this.state.author,
        desc: this.state.desc,
        book_image: this.state.book_image,
        pages: this.state.pages,
        condition: this.state.condition,
        notes: this.state.notes,
        user: this.state.user
      })
        .then(res => this.clearState())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <Container fluid>
        <Col size="lg-10">
          <div className="style">
            <h2 className="heading">Donate</h2>
            <IsbnSearch
              handleFormSubmit={this.searchClick}
              handleInputChange={this.handleInputChange}
            />
            <div className="row col-12">
              <div className="col-6" id="barcode">
                <Barcode value={this.state.search} width={this.state.width} height={this.state.height} />
              </div>
              <div className="col-6" id="bookCard">
                {this.state.isbnClicked ? (
                  <DonateBookCard
                    book_image={this.state.book_image}
                    author={this.state.author}
                    title={this.state.title}
                  />
                ) : null}
              </div>
            </div>
            <form>
              <Input
                className="inputStyle"
                value={this.state.condition}
                onChange={this.handleTextConditionChange}
                name="condition"
                placeholder="Condition (required)"
              />
              <TextArea
                className="textAreaStyle"
                value={this.state.notes}
                onChange={this.handleTextConditionChange}
                name="notes"
                placeholder="Notes (required)"
              />
              <Button className="btn login" bsStyle="primary" onClick={this.postBookDB}>
                Donate Book
            </Button>
            </form>
          </div>
        </Col>
      </Container>

    );
  }
}

export default Donate;
