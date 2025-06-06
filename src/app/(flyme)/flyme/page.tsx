import React from "react";
import FlymeHeroSection from "./components/FlymeHeroSection";
import SuggestedTravelers from "./components/SuggestedTravelers";
import PopularDestinations from "./components/PopularDestinations";

const FlymeHome = () => {
  return (
    <div>
      <FlymeHeroSection />
      <SuggestedTravelers />
      <PopularDestinations />
    </div>
  );
};

export default FlymeHome;
