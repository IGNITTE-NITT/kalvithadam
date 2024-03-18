import './App.css'
import React from 'react'
import Header from './Header'
import About from './About'
import Careers from './Careers'
import Footer from './Footer'

const Home = () => {

  return (
    <div className="App">
      <br />
      <Header />
      <hr />
      <div className="container row">
        <div className="col-md-1 text-danger font-weight-bold">
          <br /><br />
          <span id="rotate">BURN&nbsp;TO&nbsp;SHINE</span>
        </div>
        <div className="col-md-7">
          <About />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <img src="images/kt.png" alt="KT" />
        </div>
      </div>
      <hr />
      <Careers />
      <hr />
      <Footer />
      <hr />
    </div>
  )
}

export default Home
