import React from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Learning from './components/Learning'
import Magazine from './components/Magazine/Magazine'
import Profiles from './components/Profiles'


import { MobileImage } from './components/MobileImage.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/learning" component={Learning} />
          <Route path="/magazine" component={Magazine} />
          <Route path="/profiles" component={Profiles} />
        </Switch>
        <Footer />
      </div>
      <MobileImage />
    </Router>
  )
}

export default App
