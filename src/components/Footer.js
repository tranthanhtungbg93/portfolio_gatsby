import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copy right &copy; {new Date().getFullYear()}</h4>
        <span>Tran Thanh Tung</span> all right reserved
      </div>
    </footer>
  )
}

export default Footer
