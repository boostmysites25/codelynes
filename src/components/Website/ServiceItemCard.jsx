import React from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceItemCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="h-full flex flex-col justify-between gap-5 bg-white hover:bg-gradient-secondary border-2 border-primary/20 hover:border-secondary transition-all duration-300 group rounded-xl p-6 shadow-codelynes hover:shadow-codelynes-lg card-hover"
      aria-label={`Learn more about ${item.title}`}
    >
      <div className="flex flex-col gap-4 items-start">
        <div className="group-hover:scale-110 transition-all duration-300 w-16 h-16 p-3 rounded-xl bg-gradient-to-br from-accent-light-blue to-primary/30 group-hover:from-secondary/20 group-hover:to-secondary-alt/20 flex items-center justify-center">
          <img
            width="75"
            height="75"
            loading="lazy"
            src={item.icon}
            alt={`${item.title} service icon`}
            className="group-hover:scale-110 transition-all duration-300 w-12 h-12 object-contain"
          />
        </div>
        <h6 className="font-bold text-xl text-gray-900 group-hover:text-white transition-colors duration-300">
          {item.title}
        </h6>
        <p className="text-gray-700 group-hover:text-white/95 text-base leading-relaxed transition-colors duration-300">
          {item.description}
        </p>
      </div>
      <div className="text-secondary group-hover:text-white transition-all duration-300 font-semibold text-base flex gap-2 items-center mt-2">
        Know More <PiCaretDoubleRightBold className="group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default ServiceItemCard;
