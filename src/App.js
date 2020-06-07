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

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/editorial">
            <Editorial />
          </Route>
          <Route path="/protagonistas">
            <Protagonistas />
          </Route>
          <Route path="/hablamos">
            <Hablamos />
          </Route>
          <Route path="/creamos">
            <Creamos />
          </Route>
          <Route path="/despiertas">
            <Despiertas />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
      <MobileImage />
    </BrowserRouter>
  )
}

export default App
