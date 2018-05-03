import React, { Component } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Barcode from "react-barcode";
import "./DonateInputBox.css";



class DonateInputBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
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
            value: "",
        };
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

    getInfo = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.value}&key=AIzaSyBr1902s5dmz5vSbYgt67qn3x0HO7rMmzg`)
            .then(response => {
                this.setState({
                    isbn: response.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
                    title: response.data.items[0].volumeInfo.title,
                    subtitle: response.data.items[0].volumeInfo.subtitle,
                    author: response.data.items[0].volumeInfo.authors,
                    desc: response.data.items[0].volumeInfo.description,
                    book_image: response.data.items[0].volumeInfo.imageLinks.thumbnail,
                    pages: response.data.items[0].volumeInfo.pageCount,
                })
            })
    }

    // componentDidMount() {
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.value}&key=AIzaSyBr1902s5dmz5vSbYgt67qn3x0HO7rMmzg`
    //     )
    //         .then(response => {
    //             this.setState({
    //                 isbn: response.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
    //                 title: response.data.items[0].volumeInfo.title,
    //                 subtitle: response.data.items[0].volumeInfo.subtitle,
    //                 author: response.data.items[0].volumeInfo.authors,
    //                 desc: response.data.items[0].volumeInfo.description,
    //                 book_image: response.data.items[0].volumeInfo.imageLinks.thumbnail,
    //                 pages: response.data.items[0].volumeInfo.pageCount,
    //             })
    //         })
    //         .catch((error) => {
    //             console.log("error", error)
    //         })
    // }
    render() {
        return (

            <div>
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            placeholder="ISBN" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2" onClick={this.getInfo}
                    >Search Book</button>
                </form>



                {/* <div className="input-group mb-3">
                        <input
                            type="text"
                            value={this.state.value}
                            className="form-control"
                            placeholder="Enter ISBN#"
                            aria-label="Enter ISBN#"
                            aria-describedby="basic-addon2"
                            onChange={this.handleInputChange}
                        />
                        <div class="input-group-append">
                            <button
                                className="btn btn-outline-secondary" type="submit"
                                onClick={this.getInfo}
                            >Button</button>
                        </div>
                    </div> */}
                <Barcode value={this.state.value} />

                <h1>{this.state.title}</h1>
                <p>{this.state.subtitle}</p>
                <p>{this.state.author}</p>
                <p>{this.state.desc}</p>
                <img src={this.state.book_image} />
                <p>{this.state.pages}</p>

            </div>
        )
    }
}

export default DonateInputBox