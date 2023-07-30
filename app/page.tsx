"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Virtual from "@/components/Virtual";
import Info from "@/components/Info";
import FAQ from "../components/FAQ";
import Admin from "@/components/Admin";
import Footer from "@/components/Footer";
import styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToTopFallback();
    }
  };

  const scrollToTopFallback = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTopFallback);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  };

  return (
    <div className="relative">
      <Header />
      <Subscribe />
      <Virtual />
      <Info />
      <FAQ />
      <Admin />
      <Footer />
      <ScrollToTop onClick={scrollToTop}>
        <ArrowUpwardIcon style={{ fontSize: "3rem" }} />
      </ScrollToTop>
    </div>
  );
}

const ScrollToTop = styled.div`
  position: fixed;
  border: 2px solid #1f76fc;
  bottom: 2rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f76fc;
  cursor: pointer;
`;
