"use client";
import HomePageClient from "./client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Home = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomePageClient />
    </QueryClientProvider>
  );
};

export default Home;
