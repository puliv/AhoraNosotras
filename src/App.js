import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Footer } from './components/Footer'
import { Subscribe } from './components/Subscribe'

function App() {
  return (
    <div className="App">
      <Subscribe />
      <Footer />
    </div>
  )
}

export default connect()(App)
