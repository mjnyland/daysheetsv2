import React, { useState, useEffect } from "react";
import styles from "../styles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";

const daysheetsUrl = "https://downloads.daysheets.com/macOS/Daysheets.dmg"

const Popup = ({ isOpen, onClose, formId }) => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(true)
    if (isOpen) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "40185524",
        formId: "4bea449a-e29f-4af4-8fa5-a47a72e88843",
        target: `#${formId}`,
        onFormSubmitted: function($form) {
          setVisible(false)
        }
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-dimBlack fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "modal-show" : "modal-hide"
      }`}
    >
      <div className="max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 mx-[16px] lg:mx-0">
        <div className="bg-blue p-16 flex-col justify-center rounded-l-2xl hidden lg:flex">
          <div className="">
            <h2
              className={`text-[200pt] italic text-white opacity-[10%] h-[32px] translate-x-[-40px] translate-y-[-120px]`}
            >
              "
            </h2>
            <h5 className={`${styles.h5} text-white mb-[16px]`}>
              Using Daysheets has made touring more efficient and organized.
              It’s a complete game-changer.
            </h5>
            <p className="text-white font-bold">Rob Mirhadi</p>
            <p className="text-white">Tour Manager</p>
          </div>
        </div>

        <div className="bg-white rounded-l-lg lg:rounded-l-none rounded-r-lg p-16 relative">
          <div className="text-darkBlue absolute top-[16px] right-[16px]">
            <AiOutlineClose size={20} color="black" onClick={onClose} />
          </div>
          <div className="pb-[32px]">
            <h1 className={`${styles.h3}`}>Get started with Daysheets</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          {visible? 
            <div id={formId} className="hubspot-form"></div>
            :
            <div className="continue-form">
              <motion.a
                href={daysheetsUrl}
                className={`App bg-blue text-black text-center ${styles.button} flex items-center justify-center cursor-pointer`}
                onClick={onClose}
              >
                Download Daysheets
              </motion.a>

              <motion.div
                className={`App bg-blue text-black text-center ${styles.buttonBlack}`}
                onClick={onClose}
              >
                <PopupButton
                  url="https://calendly.com/michael-csc/daysheets-demo"
                  /*
                   * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                   * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                   */
                  rootElement={document.getElementById("root")}
                  text="Book a Demo"
                />
              </motion.div>
            </div>
          }


          {/*<form action="" className="flex flex-col gap-[8px]">
            <div className="flex flex-col">
              <label className="pb-[4px]">First name</label>
              <input
                type="text"
                className="bg-gray h-[40px] rounded-md text-darkBlue"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-[4px]">Last name</label>
              <input
                type="text"
                className="bg-gray h-[40px] rounded-md text-darkBlue"
              />
            </div>
            <div className="flex flex-col pb-[16px]">
              <label className="pb-[4px]">Email</label>
              <input
                type="text"
                className="bg-gray h-[40px] rounded-md text-darkBlue"
              />
            </div>
            <button className="bg-blue text-white h-[40px] rounded-md">
              Continue
            </button>
          </form>*/}

          {/* Butttons for page 2 */}
          <div className="hidden">
            <div className="flex flex-col gap-[8px]">
              <button className={`${styles.heroButton}`}>
                Download Daysheets
              </button>
              <button className={`${styles.heroButtonBlack}`}>
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
