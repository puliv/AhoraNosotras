import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">

      <Footer />
    </div>
  )
}

export default connect()(App)
