import React, { useState } from "react";
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
  Popup,
} from "../components";

const Home = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
