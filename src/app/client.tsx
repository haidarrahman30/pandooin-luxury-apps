"use client";

import MainLayout from "@/components/layout";
import ArticleSection from "@/components/section/article-section";
import DestinationSection from "@/components/section/destination-section";
import ExperienceSection from "@/components/section/experience-section";
import FootagesSection from "@/components/section/footages-section";
import HeroSection from "@/components/section/hero-section";
import SeperatorSection from "@/components/section/seperate-section";
import { fetchArticles } from "@/modules/articles/api";
import { fetchDestinations } from "@/modules/products/api";
import { useQuery } from "react-query";

export default function HomePageClient() {
  const { data } = useQuery("destinations", fetchDestinations);

  const { data: articles } = useQuery("articles", fetchArticles);

  return (
    <MainLayout>
      <HeroSection />
      <ExperienceSection />
      <SeperatorSection />
      {/* @ts-ignore */}
      <DestinationSection destinations={data?.data || []} />
      <FootagesSection />
      {/* @ts-ignore */}
      <ArticleSection articles={articles?.data} />
    </MainLayout>
  );
}
