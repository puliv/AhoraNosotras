import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import Editorial from './components/Magazine/Editorial'
import Protagonistas from './components/Magazine/Protagonistas'
import Hablamos from './components/Magazine/Hablamos'
import Creamos from './components/Magazine/Creamos'
import Despiertas from './components/Magazine/Despiertas'

import { BrowserRouter as Router, Switch, Route, hashHistory } from "react-router-dom";

import { MobileImage } from './components/MobileImage.js'

function App() {
  return (
    <Router history={hashHistory}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Editorial">
            <Editorial />
          </Route>
          <Route path="/Protagonistas">
            <Protagonistas />
          </Route>
          <Route path="/Hablamos">
            <Hablamos />
          </Route>
          <Route path="/Creamos">
            <Creamos />
          </Route>
          <Route path="/Despiertas">
            <Despiertas />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
      <MobileImage />
    </Router>
  )
}

export default connect()(App)
