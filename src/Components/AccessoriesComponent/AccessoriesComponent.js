import React from "react";

import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

function AccessoriesComponent() {
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

export default AccessoriesComponent;