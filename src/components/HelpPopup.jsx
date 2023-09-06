import React, { useState, useEffect } from "react";
import styles from "../styles";
import { AiOutlineClose } from "react-icons/ai";

const HelpPopup = ({ isOpen, onClose, formId }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`bg-dimBlack fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "modal-show" : "modal-hide"
      }`}
    >
      <div className="max-w-screen-lg grid grid-cols-1 mx-[16px] lg:mx-0">
        <div className="bg-white rounded-lg p-16 relative">
          <div className="text-darkBlue absolute top-[16px] right-[16px] cursor-pointer">
            <AiOutlineClose size={20} color="black" onClick={onClose} />
          </div>
          <div className="">
            <h1 className={`${styles.h3} pb-[32px]`}>Phone Support</h1>
            <h3 className={`${styles.h4}`}>(267) 521-2185</h3>
            <p>
              If you are unable to reach us, please leave a message and we will
              get back to you asap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPopup;
