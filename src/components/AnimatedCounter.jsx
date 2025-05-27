import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-5 md:px-10 xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-4 gap-10">
        {counterItems.map((item) => (
          <div
            key={counterItems.label}
            className="flex flex-col justify-center"
          >
            <div
              className="
          text-orange text-[100px] font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-light-primary text-xl">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
