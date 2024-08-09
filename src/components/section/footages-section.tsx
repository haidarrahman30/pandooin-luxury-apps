import { footages } from "@/dummy/data";

const FootagesSection = () => {
  return (
    <section className="py-16 bg-[#d1b77a] px-3">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#004040] font-signature mb-8 flex justify-center">
          Luxury Footages
        </h2>
        <div className="grid grid-cols-1 md:flex md:justify-center md:grid-cols-4 gap-2 mt-8 px-3">
          {footages.slice(0, 3).map((footage) => (
            <div
              key={footage.id}
              className="w-full h-full md:w-[350px] md:h-[350px]"
            >
              <img
                src={footage.imageUrl}
                alt={footage.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center my-3">
          <img src="/images/seperator_white.png" alt="white seperator" />
        </div>
        <div className="grid grid-cols-1 md:flex md:justify-center md:grid-cols-4 gap-2 mt-8 px-3">
          {footages.slice(3, 6).map((footage) => (
            <div
              key={footage.id}
              className="w-full h-full md:w-[350px] md:h-[350px]"
            >
              <img
                src={footage.imageUrl}
                alt={footage.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FootagesSection;
