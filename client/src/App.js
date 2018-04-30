import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Browse from "./pages/Browse";
import Donate from "./pages/Donate";
import Manage from "./pages/Manage";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/manage" component={Manage} />
        <Route component={NoMatch} />
      </Switch>
      <div className="push"></div>
      <Footer />
    </div>
  </Router>
);

export default App;
