import DestinationCard from "../cards/destination-card";
import { TProduct } from "@/modules/products/type";
import React from "react";

interface DestinationSectionProps {
  destinations: TProduct[];
}

const DestinationSection: React.FC<DestinationSectionProps> = ({
  destinations,
}) => {
  return (
    <section className="bg-[#faf9f5] py-16 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between md:justify-start items-center mb-8 gap-4">
          <h2 className="text-[#0f2d4b] text-4xl font-bold font-unbounded">
            Destinations
          </h2>
          <div className="flex gap-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#004040] group-hover:stroke-tan transition-colors ease-in-out duration-300"
            >
              <path
                d="M17.6458 14.1471C17.8407 13.9515 18.1573 13.9509 18.3529 14.1458L23.8374 19.6108C24.0531 19.8257 24.0531 20.1751 23.8374 20.39L18.3529 25.855C18.1573 26.0499 17.8407 26.0493 17.6458 25.8537C17.4509 25.6581 17.4515 25.3415 17.6471 25.1466L22.8117 20.0004L17.6471 14.8542C17.4515 14.6593 17.4509 14.3427 17.6458 14.1471Z"
                fill="#004040"
              ></path>
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                stroke-width="2"
              ></rect>
            </svg>
            <a href="#" className="text-[#0f2d4b] font-regular text-lg mt-2">
              EXPLORE MORE
            </a>
          </div>
        </div>
        <div className="space-y-8 mb-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
