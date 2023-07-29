"use client";

import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Virtual from "@/components/Virtual";
import Info from "@/components/Info";
import FAQ from "../components/FAQ";
import Admin from "@/components/Admin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Subscribe />
      <Virtual />
      <Info />
      <FAQ />
      <Admin />
      <Footer />
    </div>
  );
}
