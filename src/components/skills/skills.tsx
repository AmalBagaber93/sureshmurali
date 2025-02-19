"use client";
import React, { useEffect, useRef } from "react";

const Skills = () => {
  const sectionSkillsRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const titleMotion = document.getElementById("titleSkillsMotion");
      if (!sectionSkillsRef.current || !titleMotion) return;

      const topPosition =
        sectionSkillsRef?.current?.getBoundingClientRect().top;
      const sectionHeight =
        sectionSkillsRef.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const newPosition = Math.round(
        ((windowHeight - topPosition) / sectionHeight) * 100
      );

      if (topPosition < windowHeight) {
        titleMotion.style.opacity = "1";
        titleMotion.style.transform = `translateX(${-newPosition}%)`;
      } else {
        titleMotion.style.opacity = "0";
        titleMotion.style.transform = `translateX(0)`;
      }
      console.log("newPosition", newPosition)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={sectionSkillsRef}
  className="flex flex-col justify-center min-h-screen overflow-hidden relative"
    >
      <h1
        id="titleSkillsMotion"
        className="   sm:hidden md:block text-[200px]  font-semibold text-gray-100 absolute right-[-50%] z-0 mt-96 transition-transform duration-1000 ease-out opacity-0 "
      >
        SKILLS
      </h1>
      <div className=" block md:flex  justify-between gap-16 relative z-10 md:pl-64 md:pr-48">
        <h1 className="sm:block md:hidden text-[100px] font-semibold text-black">
          SKILLS
        </h1>
        <div className=" space-y-12">
          <div>
            <h1 className="text-4xl">Product Design</h1>
            <h1 className="text-4xl">Design system</h1>
            <h1 className="text-4xl">Information architect</h1>
          </div>

          <div>
            <h1 className="text-4xl">HTML & CSS</h1>
            <h1 className="text-4xl">React</h1>
            <h1 className="text-4xl">Node JS</h1>
          </div>
        </div>
        <div className=" space-y-12">
          <div>
            <h1 className="text-4xl">Project Management</h1>
            <h1 className="text-4xl">Visual Communication</h1>
            <h1 className="text-4xl">Concept development</h1>
          </div>

          <div>
            <h1 className="text-4xl">Figma</h1>
            <h1 className="text-4xl">Sketch</h1>
            <h1 className="text-4xl">Principle</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
