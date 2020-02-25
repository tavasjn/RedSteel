// Home Page //
import React from "react";

import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FeaturedProductComponent from "../FeaturedProductComponent/FeaturedProductComponent";
import SeasonalComponent from "../SeasonalComponent/SeasonalComponent";
import FooterComponent from '../FooterComponent/FooterComponent';

function HomeComponent() {
  return (
    <div>
      <HeaderComponent />
      <FeaturedProductComponent />
      <SeasonalComponent />
      <FooterComponent />
    </div>
  );
}

export default HomeComponent;
