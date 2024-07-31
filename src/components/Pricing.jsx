import { useState } from "react";
import PriceSticker from "./PriceSticker";
import ToggleButton from "./ToggleButton";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const Toggle = () => {
    setIsYearly(!isYearly);
  };

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      services: [
        { service: "videos of lessons", isIncluded: true },
        { service: "Homework check", isIncluded: true },
        { service: "Additional practical task", isIncluded: false },
        { service: "Monthly conferences", isIncluded: false },
        { service: "Personel advice from teachers", isIncluded: false },
      ],
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      services: [
        { service: "videos of lessons", isIncluded: true },
        { service: "Homework check", isIncluded: true },
        { service: "Additional practical task", isIncluded: true },
        { service: "Monthly conferences", isIncluded: true },
        { service: "Personel advice from teachers", isIncluded: false },
      ],
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      services: [
        { service: "videos of lessons", isIncluded: true },
        { service: "Homework check", isIncluded: true },
        { service: "Additional practical task", isIncluded: true },
        { service: "Monthly conferences", isIncluded: true },
        { service: "Personel advice from teachers", isIncluded: true },
      ],
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl 2xl:mx-auto my-24 flex flex-col items-center" id="pricing">
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold mb-5">
          Here are all our plans
        </h1>
        <p className="text-tartiary text-md mb-7 md:text-lg max-w-screen-lg mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          architecto nam commodi placeat cum ad consectetur beatae itaque
          impedit veritatis sapiente voluptate, nobis nesciunt maxime doloribus
          modi ducimus, officia perferendis!
        </p>
      </div>
      <div className="my-10 flex items-center gap-10">
        <span className="text-2xl font-bold">Monthly</span>
        <ToggleButton isToggled={isYearly} toggle={Toggle} />
        <span className="text-2xl font-bold">Yearly</span>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-6 justify-center">
        {packages.map((item) => (
          <PriceSticker
            key={item.name}
            title={item.name}
            description={item.description}
            price={isYearly ? item.yearlyPrice : item.monthlyPrice}
            periodPlan={isYearly ? "Year" : "Month"}
            services={item.services}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
