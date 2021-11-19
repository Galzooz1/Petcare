import React, { Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './page/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Signup from "./page/Signup/Signup";
import Navbarvet from "./components/Navbar/Navbarvet";
import Navbarpet from "./components/Navbar/Navbarpet";
import Login from "./page/Login/Login";
import { doApiGet, URL_API } from "./services/apiService";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Signup/Patients" exact component={Navbarpet} />
          <Route path="/Signup/Veterinarian" exact component={Navbarvet} />
          <Route path="/Login" exact component={Login} />
          {/* <Route path="/Portal/Vet" exact component={System} /> */}
          <div>
            <Fragment>
              <Navbar />
            </Fragment>
            <Route path="/" exact component={Home} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
