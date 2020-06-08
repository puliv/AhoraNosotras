import React from 'react'
import './App.css'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import Editorial from './components/Magazine/Editorial'
import Protagonistas from './components/Magazine/Protagonistas'
import Hablamos from './components/Magazine/Hablamos'
import Creamos from './components/Magazine/Creamos'
import Despiertas from './components/Magazine/Despiertas'
import { MobileImage } from './components/MobileImage.js'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

function App() {
  return (
    <Router history={createBrowserHistory}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/editorial" component={Editorial} />
          <Route path="/protagonistas" component={Protagonistas} />
          <Route path="/hablamos" component={Hablamos} />
          <Route path="/creamos" component={Creamos} />
          <Route path="/despiertas" component={Despiertas} />
        </Switch>
        <Footer />
      </div>
      <MobileImage />
    </Router>
  )
}

export default App
