// Footer for like social media and what not
import React from "react";

import "./FooterComponent.css";

import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.jpeg";

function FooterComponent() {
  return (
    <div>
      <div className="contact-info">
        <div className="email-info">
          <div>Contact US</div>
          <div>Email:</div>
          <div>Email Here </div>
        </div>
        <div className='social-media-div'>
          <img src={Instagram} alt="" className="social-media-icons" />
          <img src={Facebook} alt="" className="social-media-icons" />
        </div>
      </div>
      <div className="copyright-info">Copy right here</div>
    </div>
  );
}

export default FooterComponent;
