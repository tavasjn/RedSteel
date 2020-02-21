// Seasonal Product Page //
import React from "react";
import "./SeasonalComponent.css";

// Import For Photos //
import NoImage from "../../assets/no_image.jpeg";
// End of Import For Photos //

function SeasonalComponent() {
  return (
    <div className='seasonal-div'>
      <div className='seasonal-text'>Summer 2020 Apparel</div>
      <div className='seasonal-image-div'>
        <div>
          <img src={NoImage} alt="" className="seasonal-images" />
        </div>
        <div>
          <img src={NoImage} alt="" className="seasonal-images" />
        </div>
        <div>
          <img src={NoImage} alt="" className="seasonal-images" />
        </div>
        <div>
          <img src={NoImage} alt="" className="seasonal-images" />
        </div>
      </div>
    </div>
  );
}

export default SeasonalComponent;
