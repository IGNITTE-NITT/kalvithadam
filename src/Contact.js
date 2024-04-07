import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './App.css'

const Contact = () => {
  return (
    <div class="container">
        <div className="navleft"></div>

        <br />
        <Header />
        <hr />

        <h1 class="text-center">CONTACT US</h1>

        <form>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="name"><b>Name:</b></label>
                        <input type="text" className="form-control" placeholder="Enter Name" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><b>Email:</b></label>
                        <input type="text" className="form-control" placeholder="Enter Email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"><b>Message:</b></label>
                        <textarea className="form-control" placeholder="Enter Message" rows="5" id="message" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-danger">Submit</button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </form>

        <hr />
        <Footer />
    </div>
  )
}

export default Contact
