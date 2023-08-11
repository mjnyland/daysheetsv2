import styles from "../styles";
import { checkmark } from "../assets";
import { PopupButton } from "react-calendly";
import HelpContent from "./HelpContent";

const Prices = () => {
  const daysheetsUrl = "https://apps.apple.com/us/app/daysheets/id1579012240";
  const tier1Stripe = "https://buy.stripe.com/6oE9CN0GOajC50YeVn";
  const tier2Stripe = "https://buy.stripe.com/eVaeX7gFMgI08da14y";
  const tier3Stripe = "https://buy.stripe.com/14k5mx4X42Ra50Y8x1";

  return (
    <div class={`${styles.sectionBoxFlat} w-full`}>
      <div class={`${styles.contentBoxBig} pb-[64px]`}>
        <div className={`${styles.h2Box} flex flex-col items-center`}>
          <div
            className={` bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto`}
          >
            <h5>Introductory Pricing</h5>
          </div>
          <h2
            className={`${styles.h2} pb-[32px] text-center text-darkBlue pt-[32px]`}
          >
            Special launch pricing, scaled for every stage.
          </h2>
          <div className="flex flex-col items-center">
            <p className={`text-darkBlue ${styles.h2Body}`}>
              A cost-effective partner for new bands, and an advanced ally for
              larger operations. Choose the plan that suits you.
            </p>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-[16px] mx-auto justify-center px-8 lg:px-0">
          {/* Starter */}
          <div class="flex flex-col grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div class="bg-dimBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
              <h5 className="text-blue">Starter</h5>
            </div>

            <div class="flex flex-row mt-8 gap-2 items-center justify-center pb-4">
              <span className="text-2xl">$</span>
              <h2 class="text-darkBlue text-6xl">45</h2>
              <div className="flex flex-col">
                <span className="text-lg">per</span>
                <span className="text-lg">month</span>
              </div>
            </div>

            <div class="h-[2px] w-full bg-gray rounded-full"></div>

            <p className="pt-[16px] text-center text-lg font-body">
              Sleek and simple for intimate or self managed tours.
            </p>

            <div class="flex flex-col gap-2 mt-8 pb-[32px] w-full">
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">1 Admin</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Create & edit from mobile</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Daily Notes</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Add flights & hotels</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Manage Guest Lists</p>
              </div>
            </div>

            <a href={tier1Stripe} className={`${styles.button}`}>
              Get Started
            </a>
          </div>

          {/* Essentials */}
          <div class="flex flex-col grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div class="bg-dimBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
              <h5 className="text-blue">Essentials</h5>
            </div>

            <div class="flex flex-row mt-8 gap-2 items-center justify-center pb-4 w-full">
              <span className="text-2xl">$</span>
              <h2 class="text-darkBlue text-6xl">99</h2>
              <div className="flex flex-col">
                <span className="text-lg">per</span>
                <span className="text-lg">month</span>
              </div>
            </div>

            <div class="h-[2px] w-full bg-gray rounded-full"></div>

            <p className="pt-[16px] text-center text-lg font-body">
              Robust and flexible, perfect for teams touring in a bus.
            </p>

            <div class="flex flex-col gap-2 mt-8 pb-[32px] w-full">
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">2 admins</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Unlimited sections of notes</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Export PDF day sheets</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />
                <p class="text-darkBlue">Maintain travel profiles</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Phone & Text Support</p>
              </div>
            </div>

            <a href={tier2Stripe} className={`${styles.button}`}>
              Get Started
            </a>
          </div>

          {/* Advanced */}
          <div class="flex flex-col grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div class="bg-dimBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
              <h5 className="text-blue">Advanced</h5>
            </div>

            <div class="flex flex-row mt-8 gap-2 items-center justify-center pb-4">
              <span className="text-2xl">$</span>
              <h2 class="text-darkBlue text-6xl">199</h2>
              <div className="flex flex-col">
                <span className="text-lg">per</span>
                <span className="text-lg">month</span>
              </div>
            </div>

            <div class="h-[2px] w-full bg-gray rounded-full"></div>

            <p className="pt-[16px] text-center text-lg font-body">
              Expansive & intuitive for bus and truck touring.
            </p>

            <div class="flex flex-col gap-2 mt-8 pb-[32px] w-full">
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Unlimited admins</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Groups & Visibility</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Import & request travel profiles</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Import flights</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Priority Support</p>
              </div>
            </div>

            <a href={tier3Stripe} className={`${styles.button}`}>
              Get Started
            </a>
          </div>

          {/* Ultimate */}
          <div class="flex flex-col grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div class="bg-dimBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
              <h5 className="text-blue">Ultimate</h5>
            </div>

            <div class="flex flex-row mt-8 gap-2 items-center justify-center pb-4">
              <h2 class="text-darkBlue text-6xl">Lets talk</h2>
            </div>

            <div class="h-[2px] w-full bg-gray rounded-full"></div>

            <p className="pt-[16px] text-center text-lg  font-body">
              Scaled access and support, for and arenas and stadiums.
            </p>

            <div class="flex flex-col gap-2 mt-8 pb-[32px] w-full">
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Unlimited admins</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">60+ mobile users</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Prioritized feature requests</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Setup assistance</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">24/7 Support</p>
              </div>
            </div>

            <PopupButton
              url="https://calendly.com/michael-csc/daysheets-demo"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById("root")}
              text="Book a Demo"
              className={`${styles.button}`}
            />
          </div>
        </div>
      </div>
      <HelpContent />
    </div>
  );
};

export default Prices;
