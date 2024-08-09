import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-10 h-[102px] py-6 sm:bg-white bg-white md:bg-transparent">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <img
            src="/images/logo_mobile.png"
            alt="Zamrood Logo"
            className="w-[134.91px] h-[50px]"
          />
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="/"
            className="px-6 py-2.5 border-b-2 border-[#faf9f5] font-albert"
          >
            Homepage
          </a>
          <a
            href="/customize"
            className="px-6 py-2.5 border-transparent hover:border-b-2 hover:border-[#faf9f5] font-albert"
          >
            Customize Your Trip
          </a>
          <a
            href="/destination"
            className="px-6 py-2.5 border-transparent hover:border-b-2 hover:border-[#faf9f5] font-albert"
          >
            Destination
          </a>
          <a
            href="/article"
            className="px-6 py-2.5 border-transparent hover:border-b-2 hover:border-[#faf9f5] font-albert"
          >
            Article
          </a>
        </div>
        <div className="hidden md:flex">
          <a
            href="/"
            className="px-6 py-2.5 rounded-full border-2 border-[#faf9f5] text-[#faf9f5] text-base font-bold"
          >
            Need Assistance?
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src="/images/burger_button.png"
              className="text-white text-2xl"
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-[#004040] py-4 space-y-4">
          <a
            href="/"
            className="block text-[#004040] border-1 border-[#004040] p-3"
          >
            Homepage
          </a>
          <a
            href="/customize"
            className="block text-[#004040] border-1 border-[#004040] p-3"
          >
            Customize Your Trip
          </a>
          <a
            href="/destination"
            className="block text-[#004040] border-1 border-[#004040] p-3"
          >
            Destination
          </a>
          <a
            href="/article"
            className="block text-[#004040] border-1 border-[#004040] p-3"
          >
            Article
          </a>
          <a
            href="/"
            className="block mx-auto w-[200px] ms-2 text-[#004040] p-3 px-6 py-2.5 rounded-full border-2 border-[#004040] font-bold"
          >
            Need Assistance?
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
