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
import { Magazine } from './components/Magazine.js'
// import { UnderConstruction } from './components/UnderConstruction.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <UnderConstruction /> */}
        <Header />
        <Switch>
          <Route path="/">
            <Home />
            <AboutUs />
            <Magazine />
            <Learning />
            <Profiles />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path="/learning" component={Learning}>
            <Learning />
          </Route>
          <Route path="/profiles">
            <Profiles />
          </Route>
        </Switch>
        <Subscribe />
        <Footer />
      </div>
    </Router>
  )
}

export default connect()(App)
