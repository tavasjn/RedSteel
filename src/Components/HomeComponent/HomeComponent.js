// Home Page //
import React from "react";

import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FeaturedProductComponent from "../FeaturedProductComponent/FeaturedProductComponent";
import SeasonalComponent from "../SeasonalComponent/SeasonalComponent";

function HomeComponent() {
  return (
    <div>
      <HeaderComponent />
      <FeaturedProductComponent />
      <SeasonalComponent />
    </div>
  );
}

export default HomeComponent;
