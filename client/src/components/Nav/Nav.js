import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import "./Nav.css";
import API from "../../utils/API";
// import { Redirect } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Button from 'react-bootstrap/lib/Button';

class Nav extends Component {

  constructor(props, context) {
    super(props, context);
    var path = window.location.pathname;
    console.log("rendering page: " + path);
    var page = path.split("/").pop();
    console.log("page: " + page);

    if (sessionStorage.getItem("userSessionEntity") !== null) {
      this.state = {
        loggedIn: true,
        redirect: false,
        redirectUrl: null
      };
    } else if (sessionStorage.getItem("userSessionEntity") === null && page !== "/" && page !== "") {
      this.state = {
        loggedIn: false,
        redirect: true,
        redirectUrl: "/"
      };
    } else {
      this.state = {
        loggedIn: false,
        redirect: false,
        redirectUrl: null
      };
    }

  };

  redirectTo = (url) => {
    this.setState({
      redirect: true,
      redirectUrl: url
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirectUrl} />
    }
  };

  handlePostGoogleLogin = (googleUser) => {
    console.log("In handlePostGoogleLogin");
    console.log(googleUser);

    //Check if the user already exists
    API.searchUserByEmail(googleUser.getBasicProfile().getEmail())
      .then(res => {
        console.log(res);
        //If exists,
        if (res.data.length !== 0) {
          //Write user details to session 
          var userSessionEntity = {};
          userSessionEntity.id = res.data[0]._id;
          userSessionEntity.googleId = googleUser.getBasicProfile().getId();
          userSessionEntity.name = res.data[0].first_name;
          userSessionEntity.imageUrl = res.data[0].profile_image;
          userSessionEntity.email = res.data[0].email;
          userSessionEntity.idToken = googleUser.getAuthResponse().id_token;
          sessionStorage.setItem("userSessionEntity", JSON.stringify(userSessionEntity));
          //Change to state so that logout button is shown
          //Then route to browse
          this.setState({
            loggedIn: true,
            redirect: true,
            redirectUrl: "/browse"
          });

        } else {
          //If does not exists 
          //Insert user into user table
          var user = {};
          console.log(googleUser);
          user.email = googleUser.getBasicProfile().getEmail();
          user.first_name = googleUser.getBasicProfile().getGivenName();
          user.last_name = googleUser.getBasicProfile().getFamilyName();
          user.profile_image = googleUser.getBasicProfile().getImageUrl();
          API.createUser(user)
            .then(res => {
              console.log(res.data);
              //Write to session
              var userSessionEntity = {};
              userSessionEntity.id = res.data._id;
              userSessionEntity.googleId = googleUser.getBasicProfile().getId();
              userSessionEntity.name = res.data.first_name;
              userSessionEntity.imageUrl = res.data.profile_image;
              userSessionEntity.email = res.data.email;
              userSessionEntity.idToken = googleUser.getAuthResponse().id_token;
              sessionStorage.setItem("userSessionEntity", JSON.stringify(userSessionEntity));
              //Change to state so that logout button is shown
              //Then route to profile
              this.setState({
                loggedIn: true,
                redirect: true,
                redirectUrl: "/profile"
              });
            })
            .catch(err => console.log(err));
        }

      })
      .catch(err => console.log(err));
  };

  handlePostGoogleLogout = event => {
    sessionStorage.removeItem("userSessionEntity");
    console.log('User signed out.');
    this.setState({
      loggedIn: false,
      redirect: true,
      redirectUrl: "/"
    });
  };

  handleGoogleLoginFailure = event => {
    console("In handleGoogleLoginFailure");
  };

  
  render() {
    return (
      <nav className="navbar" id="Topnavbar">
        {this.renderRedirect()}
        <a className="brand active" onClick={() => this.redirectTo('/')}>The Book Worm</a>
        {
          this.state.loggedIn === true ? (
            <a className="navLinks" onClick={() => this.redirectTo('/browse')}>Browse</a>
          ) : (null)
        }
        {
          this.state.loggedIn === true ? (
            <a className="navLinks" onClick={() => this.redirectTo('/donate')}>Donate</a>
          ) : (null)
        }
        {
          this.state.loggedIn === true ? (
            <a className="navLinks" onClick={() => this.redirectTo('/manage')}>Manage</a>
          ) : (null)
        }
        {
          this.state.loggedIn === true ? (
            <a className="navLinks" onClick={() => this.redirectTo('/profile')}>Profile</a>
          ) : (null)
        }
        {
          this.state.loggedIn === true ? (
            <a className="icon" onClick={() => this.redirectTo('/')}><i className="fa fa-bars text-light"></i></a>
          ) : (null)
        }
        {
          this.state.loggedIn === false ? (
            <GoogleLogin
              className="login-btn btn btn-responsive  float-right login row"
              clientId="517497834549-3j7earnjbedaa8ntbt4cf5iqblnr4nfh.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.handlePostGoogleLogin}
              onFailure={this.handleGoogleLoginFailure}
            />) : (
              <GoogleLogout
                className="login-btn btn btn-responsive float-right login row"
                clientId="517497834549-3j7earnjbedaa8ntbt4cf5iqblnr4nfh.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={this.handlePostGoogleLogout}
              />
            )
        }
      </nav>
    );
  }
};

export default Nav;
