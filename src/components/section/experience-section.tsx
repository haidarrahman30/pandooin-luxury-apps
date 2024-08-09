const ExperienceSection = () => {
  return (
    <>
      <section className="bg-[#faf9f5] py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-[#0f2d4b] text-4xl font-bold font-signature">
            Beyond Premium
          </h2>
          <h3 className="text-[#0f2d4b] text-3xl mt-4 font-bold font-unbounded">
            ELEVATE YOUR EXPERIENCE
          </h3>
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/feature_1.png"
                alt="Personal Itineraries"
                className="w-156 h-156 mb-4"
              />
              <h4 className="text-[#0B7373] text-xl font-semibold font-unbounded">
                PERSONAL ITINERARIES
              </h4>
              <p className="text-[#0f2d4b] mt-2 text-base max-w-xs font-albert">
                Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/feature_2.png"
                alt="Personal Itineraries"
                className="w-156 h-156 mb-4"
              />
              <h4 className="text-[#0B7373] text-xl font-semibold font-unbounded">
                EXCLUSIVE EXPERIENCES
              </h4>
              <p className="text-[#0f2d4b] mt-2 text-base max-w-xs">
                From private charters to behind-the-scenes tours, we offer
                access to unique opportunities that are designed to elevate your
                trip to the next level.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/feature_3.png"
                alt="Personal Itineraries"
                className="w-156 h-156 mb-4"
              />
              <h4 className="text-[#0B7373] text-xl font-semibold font-unbounded">
                BEST FACILITES
              </h4>
              <p className="text-[#0f2d4b] mt-2 text-base max-w-xs">
                Experience the epitome of with our premium facility, designed to
                provide an unparalleled level of comfort and indulgence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Discover Tailored Experiences */}
      <section className="bg-[#faf9f5] py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-15">
          <div className="mb-8 md:mb-0">
            <img
              src="/images/icon_1.png"
              alt="Tailored Experiences"
              className="w-64 h-auto"
            />
          </div>
          <div className="text-center md:text-left md:ml-2">
            <h1 className="text-[#0f2d4b] text-3xl font-bold font-unbounded">
              Discover Tailored Experiences
            </h1>
            <p className="text-[#0f2d4b] mt-2 text-base max-w-md text-albert">
              Create your own journey, personalized to suit your preferences and
              interests, ensuring a once-in-a-lifetime adventure awaits.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#004040] text-white text-base rounded-full font-semibold hover:bg-gray-800 transition">
              Customize Your Trip
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
