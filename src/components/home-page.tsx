"use client";

import HeroSecton from "./hero-secton/hero-secton";
import { useEffect, useRef } from "react";
import AboutMe from "./about-me/about-me";
import Footer from "./footer/footer";
import Skills from "./skills/skills";
import List from "./list/list";

const HomePage = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ block: "start" });
    }
  }, []);
  return (
    <div ref={headerRef}>
      <HeroSecton />
      <AboutMe />
      <List />
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
