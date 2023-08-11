import React from "react";
import { HelpContent, Navbar, Footer } from "../components";

const Help = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <HelpContent />
      <Footer />
    </div>
  );
};

export default Help;
