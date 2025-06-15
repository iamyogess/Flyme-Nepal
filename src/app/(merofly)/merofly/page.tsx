import React from "react";
import MeroflyHeroSection from "./components/MeroflyHeroSection";
import SuggestedTravelers from "./components/SuggestedTravelers";
import PopularDestinations from "./components/PopularDestinations";

const FlymeHome = () => {
  return (
    <div>
      <MeroflyHeroSection />
      <SuggestedTravelers />
      <PopularDestinations />
    </div>
  );
};

export default FlymeHome;
