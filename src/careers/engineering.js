import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Timeline from '../Timeline'
import '../App.css'

const engineering = () => {
  
  return (
    <div className="container">
      
      <div className="navleft"></div>

      <br />
      <Header />
      <hr />

      <h1 className="text-center">ENGINEERING</h1>

      <br />

      <p>B.Tech is a 4 year professional undergraduate degree. It revolves around planning, designing and building structures. B.Arch and Civil engineering are overlapping subjects. The major difference is that B.Arch concentrates more on the design aspect whereas Civil takes care of the structural part (i.e) on how feasible the design can be.</p>

      <p>Bachelor of Planning (B.Plan) is a 4 year undergraduate degree which deals with professional planning. This course helps in the planning and management of urban and regional areas.</p>

      <h3>Overview</h3>
      <ul>
        <li>JEE MAINS Paper - 1</li>
      </ul>

      <hr />

      <h3>JEE MAINS PAPER 1</h3>

      <br />

      <h4>INTRODUCTION</h4>
      <p>JEE Mains Paper-1 is the entrance exam for admission into courses such as B.Tech in various NITs (National Institute of Technology) and GFTIs (Government-funded Technical Institutes), IIITs (Indian Institute of Information Technology), CFTIs (Centrally Funded Technical Institute).</p>

      <br />

      <h4>IMPORTANT DATES</h4>
      <br />

      <h5>January Session:</h5>
      <Timeline events={ [
        "Start of application form: Mid November 2024",
        "Release of Admit card: 3 days before the exam",
        "Examination Date: In the month of January 2025",
        "Result: End of January 2025 / Beginning of February 2025",
        "Counselling: In the month of June"
      ] } />
      <br />

      <h5>April Session:</h5>
      <Timeline events={ [
        "Start of application form: Mid March 2024",
        "Release of Admit card: 3 days before the exam",
        "Examination Date: In the month of April 2025",
        "Result: End of April 2025 / Beginning of May 2025",
        "Counselling: In the month of June"
      ] } />
      <br />

      <hr />
      <Footer />

    </div>
  )
}

export default engineering