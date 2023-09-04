import React, { useState } from "react";
import styles from "../styles";
import { mockup, wave } from "../assets";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";
import Popup from "./Popup";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const fadeUp2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

const fadeUp3 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section id="root" className={`${styles.sectionBoxFlat} bg-white relative`}>
      <Popup isOpen={popupOpen} onClose={closePopup} formId="hero-form" />
      <div
        className={`${styles.contentBox} flex flex-col items-center pt-[80px] px-4 overflow-hidden`}
      >
        <div className="flex flex-col items-center">
          {" "}
          {/* Hero text content*/}
          <div className="max-w-[900px]">
            <motion.h1
              className={`${styles.h1} text-darkBlue pb-[40px]`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              The modern solution for touring and{" "}
              <span className="text-blue">production management.</span>
            </motion.h1>
          </div>
          <div className="max-w-[800px] pb-[40px]">
            <motion.p
              className={`text-darkBlue text-center text-lg sm:text-2xl `}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Minimize time spent on organization, so you can enjoy your days
              off. Doesn’t that sound nice?
            </motion.p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[32px]">
            <motion.button
              className={`${styles.heroButton} cursor-pointer`}
              variants={fadeUp2}
              initial="hidden"
              animate="visible"
              onClick={openPopup}
            >
              Download Daysheets
            </motion.button>

            <motion.div
              className={`App bg-blue text-black text-center ${styles.heroButtonBlack} cursor-pointer`}
              variants={fadeUp2}
              initial="hidden"
              animate="visible"
            >
              <PopupButton
                url="https://calendly.com/benatdaysheets/30"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Book a Demo"
              />
            </motion.div>
          </div>
          <div
            className={`max-w-[1000px] pt-[80px] relative z-20 h-[500px] sm:h-[816px]`}
          >
            <motion.img
              variants={fadeUp3}
              initial="hidden"
              animate="visible"
              src={mockup}
              alt="Daysheets UI Mobile and Desktop Mockup"
            />
          </div>
        </div>
      </div>

      <motion.img
        variants={fadeUp3}
        initial="hidden"
        animate="visible"
        src={wave}
        alt="Soundwave illustration"
        className="absolute top-[660px] lg:top-[600px] w-full z-10"
      />
    </section>
  );
};

export default Hero;
