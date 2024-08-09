import { TProduct } from "@/modules/products/type";
import { TDestination } from "@/types/destinations";
import { convertToText } from "@/utils";

type DestinationCardProps = {
  destination: TProduct;
  index: number;
};

const DestinationCard = ({ destination, index }: DestinationCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row my-[72px] ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      } items-center gap-10`}
    >
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={destination.related_galleries[0].src}
          alt={destination.itinerary_name}
          className="w-full h-[380px] rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-[#0f2d4b] font-medium text-sm">
            {destination.itinerary_day} Days
          </span>
          <h1 className="text-[#0B7373] text-2xl md:text-4xl font-bold font-unbounded">
            {destination.itinerary_name}
          </h1>
          <p className="text-[#0f2d4b] text-sm font-semibold">
            Organized by {destination.partner_name}
          </p>
          <p className="text-[#0f2d4b] text-base">
            {convertToText(destination.itinerary_short_description)}
          </p>
        </div>
        <div className="flex justify-between items-center mt-[72px]">
          <div className="text-left">
            <span className="text-[#0f2d4b] text-base">Start From</span> <br />
            <h2 className="text-xl md:text-3xl text-[#0B7373]">{`IDR 5,200,000`}</h2>
          </div>
          <button className="px-4 py-2 text-[#0f2d4b] border-2 border-[#0f2d4b] rounded-full font-semibold hover:bg-gray-200 transition">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
