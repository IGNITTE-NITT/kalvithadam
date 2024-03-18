import React from 'react'

const Footer = () => {
  
  const socialMedia = [
    {link: "https://www.instagram.com/ignitte.nitt?igsh=MzRlODBiNWFlZA==", icon:"instagram"},
    {link: "https://twitter.com/ignitte_nitt", icon:"twitter"},
    {link: "https://www.youtube.com/@IGNITTETeachingClubofNITT", icon:"youtube"},
    {link: "https://www.facebook.com/Ignitte.NITT/", icon:"facebook"},
    {link: "https://www.linkedin.com/company/ignitte/", icon:"linkedin"},
    {link: "https://www.ignitte.org/", icon:"globe"}
  ]
  
  return (
    <div className="App">
      {socialMedia.map((media, id) => {
        return (
            <span key={id}>
                <a href = {media.link}>
                    <i className={"icon fa fa-"+media.icon}></i>
                </a>
                &emsp;
            </span>
        )
      })}
      <br /><br />
      <h6>© 2024 IGNITTE All Rights Reserved</h6>
    </div>
  )
}

export default Footer
