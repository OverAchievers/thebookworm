import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Browse extends Component {
  state = {
    books: []
  };

  componentDidMount() {
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-12 sm-12">
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 lg-12">



                    <div class="card horizontal m-auto" id="cliqueCard" >
                    <div class="card-header">
                      <span class="card-title">Card Title</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red" data-toggle="modal" data-target="#exampleModalCenter"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                  </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <p class="">
                      <img class='rounded-circle' width='50' height='50' src="https://lh4.googleusercontent.com/-Iof98iTcQO8/AAAAAAAAAAI/AAAAAAAAIsk/7mP2ynQOq9U/s96-c/photo.jpg"></img>
                        <span>Organizer: </span>
                        <span class=""></span>
                    </p>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Date &amp; Time</p>
                    <p>Location</p>
                    <p>Description</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data="">3-way Button</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div class="push"></div>
      </Container>
          );
        }
      }
      
      export default Browse;
