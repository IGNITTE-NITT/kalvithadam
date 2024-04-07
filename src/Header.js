import React from 'react'
import './App.css'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="fa fa-bars" style={{ color: "black" }}></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <br />
        <li className="nav-item mr-2">
          <a className="nav-link btn btn-danger text-dark" href="/"><b>Home</b></a>
        </li>
        <br />
        <li className="nav-item mr-2">
          <a className="nav-link btn btn-danger text-dark" href="/#about"><b>About Us</b></a>
        </li>
        <br />
        <li className="nav-item">
          <a className="nav-link btn btn-danger text-dark" href="/contact"><b>Contact Us</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
