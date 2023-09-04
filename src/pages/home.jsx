import React from "react";
import {
  Hero,
  Reviews,
  Navbar,
  Features,
  Personalized,
  Exports,
  GuestList,
  BottomCTA,
  TravelProfile,
  Flights,
  Footer,
  Mobile,
} from "../components";

const Home = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-30">
        <Navbar />
      </div>
      <Hero />
      <Reviews />
      <Features />
      <Flights />
      <Mobile />
      <Personalized />
      <Exports />
      <GuestList />
      <TravelProfile />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default Home;
