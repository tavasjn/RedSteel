// Footer for like social media and what not
import React from "react";

import './FooterComponent.css';

function FooterComponent() {
  return (
    <div>
      <div className='contact-info'>
        <div className='email-info'>
            <div>Contact US</div>
            <div>Email:</div>
            <div>Email Here </div>
        </div>
        <div>
            Instagram logo
        </div>
        <div>
            FaceBook logo maybe if we make one
        </div>
      </div>
      <div className='copyright-info'>
          Copy right here 
      </div>
    </div>
  );
}

export default FooterComponent;
