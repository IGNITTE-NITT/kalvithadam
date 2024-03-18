import './App.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const NotFound = () => {
  return (
    <div className="App">
      <br />
      <Header />
      <hr />
      <h4>Oops ! The page you were searching for does not exist. Please contact the admin.</h4>
      <img src="images/404.avif" alt="404" />
      <hr />
      <Footer />
    </div>
  )
}

export default NotFound
