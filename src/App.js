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


function App() {
  return (
    <div className="App">
      {/* <UnderConstruction /> */}
      <Header />
      <Home />
      <AboutUs />
      <Magazine />
      <Learning />
      <Profiles />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default connect()(App)
