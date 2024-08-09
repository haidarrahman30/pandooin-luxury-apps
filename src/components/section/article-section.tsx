import React from "react";
import Banner from "../banner";
import { TArticle } from "@/modules/articles/type";

interface ArticleSectionProps {
  articles: TArticle[];
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="bg-[#faf9f5] py-16 px-6">
      <div className="container mx-auto">
        <Banner
          backgroundImage="/images/bg_banner.png"
          logoImage="/images/logo.png"
          linkText="Pandooin.com"
          linkUrl="https://pandooin.com"
          altText="Pandion logo"
          caption="Want to see other destinations? Check us out of website"
        />
        <h2 className="text-3xl font-bold text-teal-700 mb-2">Articles</h2>
        <p className="text-teal-600 mb-6">
          Our curated writings, offering something for every reader.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {articles.length > 0 && (
            <a
              href={articles[0].slug}
              target="_blank"
              rel="noopener noreferrer"
              className="block group lg:col-span-2"
            >
              <div
                className="relative w-full h-64 md:h-[500px] bg-cover bg-center transition-all duration-300 filter grayscale group-hover:grayscale-0"
                style={{
                  backgroundImage: `url(${articles[0].featured_image})`,
                }}
              ></div>
              <div className="bg-teal-700 text-white p-2 text-sm font-semibold mt-2">
                {articles[0].title}
              </div>
            </a>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-2 h-full">
            {articles.slice(1).map((article) => (
              <a
                key={article.id}
                href={article.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="relative w-full h-40 md:h-48 bg-cover bg-center transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${article.featured_image})`,
                  }}
                ></div>
                <div className="bg-teal-700 text-white p-2 text-sm font-semibold mt-2">
                  {article.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
