"use client";

import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    
    if (!title || !subtitle) return;
  
    setTimeout(() => {
      title.style.transition = "opacity 1s ease-out, transform 1s ease";
      title.style.opacity = '1';
      title.style.transform = "translateY(0)";
    }, 500);
    
    setTimeout(() => {
      subtitle.style.transition = "opacity 1s ease, transform 1s ease";
      subtitle.style.opacity =' 1';
      subtitle.style.transform = "translateY(0)";
    }, 1000);
  }, []);
  
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-center min-h-screen">
      <h1 id="hero-title" className="text-6xl md:text-7xl font-bold opacity-0 transform translate-y-12 transition-all">Suresh Murali</h1>
      <h2 id="hero-subtitle" className="text-3xl md:text-5xl mt-2 opacity-0 transform translate-y-12 transition-all">UI/UX Designer & Developer</h2>
    </div>
  );
};

export default HeroSection;
