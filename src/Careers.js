import React from 'react'

const Careers = () => {
  
  const list = ["agriculture", "architecture", "arts", "aviation", "ayurveda", "business_and_management", "commerce", "design", "engineering", "food_technology", "hotel_management", "law", "medicine", "nursing", "paramedical", "pharmacy", "public_sector", "scholarships", "science", "teaching"]

  return (
    <div>
      <h3>Careers</h3>
      <p>Explore the various career options by clicking on the images</p>

      <div className="container">
        {list.map((src,id) => {
            return (
                <span className="col-md-3" key={id}>
                    <a href={"/"+src}>
                      <img className="hover-pointer" src={"images/"+src+".webp"} alt={id} id="careerImage" />
                    </a>
                </span>
            )
        })}
      </div>

    </div>
  )
}

export default Careers
