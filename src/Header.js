import React from 'react'

const Header = () => {
  return (
    <div className="container row">
        <div className="container col-md-1">
            <img src="images/logo.png" />
        </div>
        <div className="col-md-5"></div>
        <div className="col-md-6 justify-content-end">
            <button type="button" className="btn btn-danger font-weight-bold">Home</button>
            &emsp;
            <button type="button" className="btn btn-danger font-weight-bold">About Us</button>
            &emsp;
            <button type="button" className="btn btn-info font-weight-bold">Personality Test</button>
        </div>
    </div>
  )
}

export default Header
