import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";
import ReactLoading from 'react-loading';
import {FormGroup, FormControl, ControlLabel, MenuItem, InputGroup, DropdownButton} from "react-bootstrap";

class Browse extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      initialLoad: false,
      books: [],
      searchString: "",
      searchContext: "any"
    };
  };

  componentDidMount() {
    this.loadBooks(null, this.state.searchContext);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("search string is: " + value);
    this.setState({
      [name]: value
    });
    this.loadBooks(value, this.state.searchContext);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console(this.stage.searchString);
    this.loadBooks(this.state.searchString, this.state.searchContext);
  };

  loadBooks = (searchString, searchContext) => {
    console.log("in loadbooks method");
    API.searchBook(searchString, searchContext)
      .then(res => {
        console.log(res.data);
        this.setState({ 
          books: res.data,
          initialLoad: true
        })
      })
      .catch(err => console.log(err));
  };

  loadStatus = () => {
    if(this.state.initialLoad === false){
      return <ReactLoading type={"bubbles"} color={"black"} height={150} width={150} />;
    } else if(this.state.initialLoad === true && this.state.books.length === 0){
      return <h3>No books to display</h3>; 
    } else{
      return null;
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-12 sm-12">
            <form className="form-inline">
              <input onChange={this.handleInputChange} name="searchString" value={this.state.searchString} placeholder="Search"></input>
            </form>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 lg-12">
            {this.loadStatus()}
            {
              this.state.books.map(book => (
                <BookCard book={book} key={book._id} source={"browse"}></BookCard>
              ))
            }
          </Col>
        </Row>
        <div className="push"></div>
      </Container>
    );
  }
}

export default Browse;
