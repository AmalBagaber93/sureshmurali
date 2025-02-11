"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const AboutMe = () => {
  const sectionAboutMeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const titleMotion = document.getElementById("titleMotion");
      if (!sectionAboutMeRef.current || !titleMotion) return;

      const topPosition =
        sectionAboutMeRef?.current?.getBoundingClientRect().top;
      const sectionHeight =
        sectionAboutMeRef.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      const newPosition = Math.round(
        ((windowHeight - topPosition) / sectionHeight) * 100
      );
      if (topPosition < windowHeight) {
        titleMotion.style.opacity = "1";
        titleMotion.style.transform = `translateX(${newPosition - 70}%)`;
      } else {
        titleMotion.style.opacity = "0";
        titleMotion.style.transform = `translateX(0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionAboutMeRef}
      className="flex flex-col relative   min-h-screen mb-72 overflow-hidden"
    >
      <h1
        id="titleMotion"
        className={clsx(
          "sm:hidden md:block relative left-[-15%] text-[200px] font-semibold text-gray-100 transition-transform duration-1000 ease-linear opacity-0    "
        )}
      >
        ABOUT ME
      </h1>
      <div className="absolute justify-items-end top-32  right-0 ">
        <h5 className="text-4xl w-full md:w-5/6 ">
          Crafting user-friendly and aesthetic UI designs is not just my
          profession, it's my passion.
        </h5>
      </div>
    </div>
  );
};

export default AboutMe;

