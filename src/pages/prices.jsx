import React from "react";
import { Navbar, Pricing, Footer } from "../components";

const prices = () => {
  return (
    <div className="flex flex-col min-h-[100vh] w-full">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <Pricing className="" />
      <Footer className="" />
    </div>
  );
};

export default prices;
