import React from "react";

import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

function ShirtsComponent() {
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

export default ShirtsComponent;