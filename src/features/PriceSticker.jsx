import Button from "../components/Button";
import { FaCircle } from "react-icons/fa6";

const PriceSticker = ({ title, description, price, periodPlan, services }) => {
  return (
    <div className="flex flex-col items-center gap-4 shadow-3xl p-8 rounded-3xl max-w-sm">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-tartiary text-xs mb-7 md:text-sm text-center">
        {description}
      </p>
      <h2>
        <span className="text-5xl font-bold text-secondary">{price}$</span>/
        {periodPlan}
      </h2>
      <ul className="flex flex-col items-start w-full gap-4">
        {services.map((service) => (
          <div className="flex items-center gap-4" key={service.service}>
            <span
              className={`${
                service.isIncluded ? "text-green-500" : "text-red-500"
              }`}
            >
              <FaCircle />
            </span>
            <li className="text-sm font-semibold">{service.service}</li>
          </div>
        ))}
      </ul>
      <Button
        title="Get started"
        className="text-white"
      />
    </div>
  );
};

export default PriceSticker;
