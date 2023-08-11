import React from "react";
import styles from "../styles";
import { checkmark } from "../assets";

const PricingCard = () => {
  return (
    <div>
      {/* Enterprise */}
      <div class="flex flex-col items-center bg-white px-16 py-8 rounded-lg  border-[2px] border-gray">
        <div class="bg-darkBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
          <h5>Enterprise</h5>
        </div>

        <div class="flex flex-row mt-8 gap-2 items-center pb-4">
          <h2 class="text-darkBlue text-5xl">Lets talk</h2>
        </div>

        <div class="h-[2px] w-full bg-gray rounded-full"></div>

        <div class="flex flex-col gap-2 mt-8 pb-[32px]">
          <div class="flex flex-row gap-4">
            {" "}
            <img src={checkmark} alt="Checkmark" />{" "}
            <p class="text-darkBlue">Frequent flyer numbers</p>
          </div>
          <div class="flex flex-row gap-4">
            {" "}
            <img src={checkmark} alt="Checkmark" />{" "}
            <p class="text-darkBlue">Passport Information</p>
          </div>
          <div class="flex flex-row gap-4">
            {" "}
            <img src={checkmark} alt="Checkmark" />{" "}
            <p class="text-darkBlue">Hotel Reward Numbers</p>
          </div>
          <div class="flex flex-row gap-4">
            {" "}
            <img src={checkmark} alt="Checkmark" />{" "}
            <p class="text-darkBlue">Passport Information</p>
          </div>
          <div class="flex flex-row gap-4">
            {" "}
            <img src={checkmark} alt="Checkmark" />{" "}
            <p class="text-darkBlue">Hotel Reward Numbers</p>
          </div>
        </div>

        <a
          href="mailto:hello@daysheets.com"
          className={`${styles.buttonBlack}`}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
