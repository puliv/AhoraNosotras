import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Subscribe } from './components/Subscribe'
import { Header } from './components/Header'
import { Profiles } from './components/Profiles.js'
import { AboutUs } from './components/AboutUs.js'
import { Learning } from './components/Learning.js'
import { Magazine } from './components/Magazine/Magazine.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { UnderConstruction } from './components/UnderConstruction.js'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <UnderConstruction /> */}
        <Header />
        <Home />
        <AboutUs />
        <Magazine />
        <Learning />
        <Profiles />

        <Switch>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path="/newsletter">
            <Subscribe />
          </Route>
          <Route path="/learning">
            <Learning />
          </Route>
          <Route path="/profiles">
            <Profiles />
          </Route>
          {/* <Route
            path="/home">
            <Home />
          </Route>
          <Route
            path="/">
            <Home />
          </Route> */}
        </Switch>
        <Subscribe />
        <Footer />
      </div>
    </Router>
  )
}

export default connect()(App)
