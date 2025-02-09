"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Footer = () => {
  const sectionfootereRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const titleMotion = document.getElementById("footerTitle");
      if (!sectionfootereRef.current || !titleMotion) return;

      const topPosition =
        sectionfootereRef?.current?.getBoundingClientRect().top;
      const sectionHeight =
        sectionfootereRef.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      const newPosition = Math.round(
        ((windowHeight - topPosition) / sectionHeight) * 100
      );
      if (topPosition < windowHeight) {
        titleMotion.style.opacity = "1";
        titleMotion.style.transform = `translateX(${-90 + newPosition}%)`;
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
      ref={sectionfootereRef}
      className="flex flex-col  justify-center   min-h-screen overflow-hidden"
    >
      <h1
        id="footerTitle"
        className="sm:hidden md:block relative text-[200px]  font-semibold text-gray-100 transition-transform  duration-1000 ease-out opacity-0 w-fit  "
      >
        CONTACT
      </h1>
      <h1 className="sm:block md:hidden text-[100px] font-semibold text-black">
        CONTACT
      </h1>
      <div className="flex flex-wrap gap-40 md:absolute right-32 mt-8 ">
        <Image
          src={"/twitter-icon.svg"}
          alt={"twitter"}
          width={80}
          height={100}
        />
        <Image
          src={"/github-icon.svg"}
          alt={"github"}
          width={80}
          height={100}
        />
        <Image src={"/mail-icon.svg"} alt={"mail"} width={100} height={100} />
        <Image src={"/insta-icon.svg"} alt={"insta"} width={80} height={80} />
        <Image src={"/web-icon.svg"} alt={"web"} width={100} height={100} />
        <Image
          src={"/linkedin-icon.svg"}
          alt={"linkedin"}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default Footer;
