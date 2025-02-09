"use client";

import React from 'react'
import HeroSecton from './hero-secton/hero-secton'
import AboutMe from './about-me/about-me'
import DesignSystem from './list/list'
import Footer from './footer/footer'
import Skills from './skills/skills'
import { useEffect, useRef } from "react";

const HomePage = () => {
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div ref={headerRef}>
        <HeroSecton/>
        <AboutMe/>
        <DesignSystem/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default HomePage
