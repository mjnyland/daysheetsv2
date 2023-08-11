import React from "react";
import styles from "../styles";

const HelpContent = () => {
  return (
    <div class={`${styles.sectionBox} bg-lightWhite grow`}>
      <div class={`${styles.contentBox} my-auto`}>
        <div className="grid grid-cols-3 gap-[64px]">
          <div className="col-span-1">
            <h2 className={`${styles.h2} text-darkBlue`}>FAQ</h2>
            <p className={`${styles.body} text-darkBlue`}>
              Can't find what you're looking for? Our support team is here to
              answer any questions.
            </p>
          </div>

          <div className="col-span-2 flex flex-col gap-[32px]">
            <div>
              <h5 className={`${styles.h5} text-darkBlue`}>
                Who is considered an admin?
              </h5>
              <p className={`${styles.body} text-darkBlue`}>
                An admin has editing privileges. While all team members can
                access Daysheets via our Mac or mobile apps, only admins have
                the capability to modify details.
              </p>
            </div>

            <div>
              <h5 className={`${styles.h5} text-darkBlue`}>
                What platforms does Daysheets support?
              </h5>
              <p className={`${styles.body} text-darkBlue`}>
                Daysheets is currently available for MacOS (OS12+), iOS and
                Android. Admins can use the MacOS app or the iOS app to create
                and maintain tours.
              </p>
            </div>

            <div>
              <h5 className={`${styles.h5} text-darkBlue`}>
                Does Daysheets work offline?
              </h5>
              <p className={`${styles.body} text-darkBlue`}>
                Yes! Daysheets offers full create and edit capabilities from the
                MacOS app, regardless of your connection status.
              </p>
            </div>

            <div>
              <h5 className={`${styles.h5} text-darkBlue`}>
                Can I try Daysheets before subscribing?
              </h5>
              <p className={`${styles.body} text-darkBlue`}>
                Yes! There is no credit card required to try Daysheets. We give
                teams 30 days to try Daysheets.
              </p>
            </div>

            <div>
              <h5 className={`${styles.h5} text-darkBlue`}>
                Can Daysheets accommodate multiple tours at once?
              </h5>
              <p className={`${styles.body} text-darkBlue`}>
                Reach out to us and we will figure out a customized plan that
                works for you!
              </p>
            </div>

            <div>
              <h5 className={`${styles.h5} text-darkBlue`}>
                What happens if I work with multiple artists?
              </h5>
              <p className={`${styles.body} text-darkBlue`}>
                Reach out to us and we will figure out a customized plan that
                works for you!
              </p>
            </div>

            <div>
              <h5 className={`${styles.h5} text-darkBlue`}>
                Do I have to pay for Daysheets when i'm not using it?
              </h5>
              <p className={`${styles.body} text-darkBlue`}>
                With Daysheets, you can pay as you go, without losing access to
                your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpContent;
