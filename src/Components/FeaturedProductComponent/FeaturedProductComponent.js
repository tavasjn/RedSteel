// Featured Page //
import React from "react";
import "./FeaturedProductComponent.css";

// Photo Imports Below //
// Using a no image photo until we get product photos //
import NoImage from "../../assets/no_image.jpeg";
// Photo Imports Above //

function FeaturedProductComponent() {
  return (
    <div>
        <div className='featured-bar'>(Featured Items Name Here this is the lay out)</div>
      <div className="featured-line">
        <div>
          <img src={NoImage} alt="" className="featured-images" />
        </div>
        <div>
          <img src={NoImage} alt="" className="featured-images" />
        </div>
        <div>
          <img src={NoImage} alt="" className="featured-images" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductComponent;
