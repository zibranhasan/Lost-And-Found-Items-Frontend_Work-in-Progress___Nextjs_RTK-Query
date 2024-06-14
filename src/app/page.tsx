"use client";

import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/Hero";

import RecentLostItems from "./components/Lost Item Reports/LostItemReports";
import Footer from "./components/Footer/Footer";
import { useGetAllLostItemsQuery } from "@/redux/api/userApi";

export default function Home() {
  const { data, isLoading, error } = useGetAllLostItemsQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading items</div>;

  const lostItems = data?.response || [];

  console.log("lostItems", lostItems);

  return (
    <div>
      <Header />
      <HeroSection />
      <RecentLostItems items={lostItems} />

      <Footer />
    </div>
  );
}
