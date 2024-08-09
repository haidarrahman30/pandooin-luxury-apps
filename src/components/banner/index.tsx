import React from "react";

interface BannerProps {
  backgroundImage: string;
  logoImage: string;
  linkText: string;
  linkUrl: string;
  altText: string;
  caption: string;
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  logoImage,
  linkText,
  linkUrl,
  altText,
  caption,
}) => {
  return (
    <div
      className="relative w-full py-6 md:py-1 h-auto md:h-[120px] bg-cover bg-center mb-[72px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-center md:justify-between items-center h-full px-6 text-center md:text-left">
        <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
          <img src={logoImage} alt={altText} className="h-12 md:h-16 lg:h-20" />
        </div>

        <div className="flex flex-col items-center md:items-end text-white">
          <div className="text-sm md:text-lg lg:text-xl mb-2">{caption}</div>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-base md:text-lg lg:text-xl"
          >
            {linkText} <span className="text-white">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
