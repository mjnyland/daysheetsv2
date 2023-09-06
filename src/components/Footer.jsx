import React from "react";
import styles from "../styles";
import { logotype } from "../assets";

const Footer = () => {
  const privacyLink = "https://www.iubenda.com/privacy-policy/79370408";
  const termsLink = "https://www.iubenda.com/terms-and-conditions/79370408";

  return (
    <div className={`${styles.sectionBoxSmall} bg-gray w-full`}>
      <div className={`${styles.contentBox} px-4`}>
        <div className="flex flex-col items-center gap-[32px]">
          <img
            src={logotype}
            alt="Daysheets Logotype"
            className="Daysheets Logotype"
          />
          <ul className="flex flex-row text-darkBlue gap-[16px]">
            <li>Help</li>
            <a href={privacyLink}>Privacy Policy</a>
            <a href={termsLink}>Terms of Use</a>
          </ul>

          <div className={`h-[1px] w-full bg-darkBlue`}></div>
          <p className={`${styles.body} text-darkBlue`}>
            © 2023 Daysheets. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
