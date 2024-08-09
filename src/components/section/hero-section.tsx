const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-[url('/images/bg_hero.png')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 py-16 flex flex-col items-center md:items-start justify-center h-full text-center md:text-left">
        <h1 className="text-white text-4xl md:text-6xl font-semibold">
          <span className="block text-[#d6b66b] text-5xl md:text-7xl font-normal font-signature">
            Premium Travel
          </span>
          <span className="block text-[#faf9f5] text-[32px] md:text-[54px] font-bold font-unbounded">
            Beyond Expectation
          </span>
        </h1>
        <p className="text-white mt-4 text-base md:text-xl max-w-lg font-albert">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <button className="mt-8 px-6 py-3 text-[#faf9f5] text-base rounded-full border-2 border-[#faf9f5] font-semibold hover:bg-gray-200 transition text-albert">
          Take me there
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
