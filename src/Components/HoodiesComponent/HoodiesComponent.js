import React from "react";

import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

function HoodiesComponent() {
  return (
    <div>
      <div>
        <HeaderComponent />
        <div>
          {/* Body of page */}
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default HoodiesComponent;