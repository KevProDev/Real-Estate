import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, Switch, Link } from 'react-router-dom'
import { HashRouter,Route} from 'react-router-dom'
import realEstate from './realEstate.js';

export default class Hom extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Kevin'
      
    }
  }
  render () {
    return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home" component={realEstate}/>
        </Switch>
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
            Kevin
          </span>
          <a href="#" className="logo">
            ComeHome
          </a>
          <ul className="main-nav" id="js-menu">
            <li>
              <a href="#" className="nav-links">
                List Your Property
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Advertise With Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Mortage Center
              </a>
            </li>
          </ul>
        </nav>

        <div className="home">
          <div className="headline--box">
            <a href="index.html" className="headline">
              Come Find Your Home
            </a>
            <Link to="/home" >HOMER</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

