import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import {FormGroup, FormControl, ControlLabel, Checkbox, Button} from "react-bootstrap";
import "./Profile.css";


class Profile extends Component {
  constructor(props) {
    super(props)
    var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));
    this.state = this.initialState(userSessionEntity)
    API.searchUserByEmail(this.state.email)
      .then(res => {
        console.log(res.data[0]);
        this.setState({ 
          first_name: res.data[0].first_name,
          last_name: res.data[0].last_name,
          email: res.data[0].email,
          profile_image: res.data[0].profile_image,
          phone: res.data[0].phone,
          share_phone: res.data[0].share_phone,
          addr_line_1: res.data[0].address !== undefined ? res.data[0].address.addr_line_1 : "",
          addr_line_2: res.data[0].address !== undefined ? res.data[0].address.addr_line_2 : "",
          zipcode: res.data[0].address !== undefined ? res.data[0].address.zipcode : "",
          city: res.data[0].address !== undefined ? res.data[0].address.city : "",
          state: res.data[0].address !== undefined ? res.data[0].address.state : "",
          share_address: res.data[0].share_address,
          active_status: res.data[0].active_status
        });
      })
      .catch(err => console.log(err));
    this.handleChange = this.handleChange.bind(this);
    
    // as you probably
    // know, if you're going to be passing functions around and invoke them as
    // callbacks, you'll need to hold onto 'this' because it's bound at runtime
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initialState(userSessionEntity) {
    return {
      _id: (userSessionEntity ? userSessionEntity.id : null),
      first_name: '',
      last_name: '',
      email: (userSessionEntity ? userSessionEntity.email : null),
      profile_image: '',
      phone: '',
      share_phone: false,
      addr_line_1: "",
      addr_line_2: "",
      city: "",
      state: "",
      zipcode: "",
      share_address: false,
      active_status: false,
      disable_save: true
    }
  }

  componentDidMount() {
  }

  handleChange(event) {

    if(event.target.type === "checkbox"){
      this.setState({ [event.target.name]: event.target.checked, disable_save: false});  
    } else{
      this.setState({ [event.target.name]: event.target.value, disable_save: false });
    }
    
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const user={
      _id: this.state._id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      share_phone: this.state.share_phone,
      address: {
        addr_line_1: this.state.addr_line_1,
        addr_line_2: this.state.addr_line_2,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      },
      share_address: this.state.share_address,
      active_status: true
    };
    console.log(user);
    API.updateUser(user)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <Container fluid>
        <Row>
          <h2 className="heading">Profile</h2>
          <Col size="lg-12">
              <img id="formImg" src={this.state.profile_image} width="100"  class="d-inline-block align-top" height="100" alt="Default Profile"></img>
              <hr></hr>              
          </Col>
        </Row>  
        <Row>
          <Col size="lg-10">
            <div id="formStyle">
              <form onSubmit={this.handleSubmit}>
                <FormGroup
                  controlId="first_name"
                >
                  <ControlLabel>First Name</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="first_name"
                    type="text"
                    value={this.state.first_name}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup
                  controlId="last_name"
                >
                  <ControlLabel>Last Name</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="last_name"
                    type="text"
                    value={this.state.last_name}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>         
                <FormGroup
                  controlId="email"
                >
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="email"
                    type="text"
                    value={this.state.email}
                    placeholder=""
                    onChange={this.handleChange} readOnly
                  />
                </FormGroup>     
                <FormGroup
                  controlId="phone"
                >
                  <ControlLabel>Mobile Number</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="phone"
                    type="text"
                    value={this.state.phone}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup
                  controlId="share_phone"
                >
                  <Checkbox className="checkStyle" name="share_phone" onChange={this.handleChange} checked={this.state.share_phone}> Mobile number visible to other users</Checkbox>
                </FormGroup>  
                <FormGroup
                  controlId="addr_line_1"
                >
                  <ControlLabel>Address Line 1</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="addr_line_1"
                    type="text"
                    value={this.state.addr_line_1}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup
                  controlId="addr_line_2"
                >
                  <ControlLabel>Address Line 2</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="addr_line_2"
                    type="text"
                    value={this.state.addr_line_2}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup
                  controlId="city"
                >
                  <ControlLabel>City</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="city"
                    type="text"
                    value={this.state.city}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup
                  controlId="state"
                >
                  <ControlLabel>State</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="state"
                    type="text"
                    value={this.state.state}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup
                  controlId="zipcode"
                >
                  <ControlLabel>Postal Code</ControlLabel>
                  <FormControl
                    className="inputStyle"
                    name="zipcode"
                    type="text"
                    value={this.state.zipcode}
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup
                  controlId="share_address"
                >
                  <Checkbox className="checkStyle" name="share_address" onChange={this.handleChange} checked={this.state.share_address}> Address visible to other users</Checkbox>
                </FormGroup> 
                <Button className="btn btn-lg login float-right save" type="submit" onSubmit={this.handleSubmit} disabled={this.state.disable_save}>Save</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
