import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Footer } from './components/Footer'
import { Subscribe } from './components/Subscribe'
import { Header } from './components/Header'
import { Profiles } from './components/Profiles.js'
import { AboutUs } from './components/AboutUs.js'


function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Profiles />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default connect()(App)
