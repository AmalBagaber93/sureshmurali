"use client";

import React, { useEffect, useRef, useState } from "react";
import { imagesData, textsData } from "@/data/data";
import Images from "./components/images";
import Texts from "./components/texts";
import clsx from "clsx";


const List = () => {
  const sectionListRef = useRef<HTMLInputElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [percentageScrolled, setPercentageScrolled] = useState(0);
  const [inSection, setInSeaction] = useState(false);

  useEffect(() => {
    setInSeaction(false);
  }, [textIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionListRef.current) return;

      const topPosition = sectionListRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionListRef.current.getBoundingClientRect().height;
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / scrollHeight) * 100;
      setPercentageScrolled( ((topPosition - scrollPosition) / sectionHeight) * 100);

      if (percentage >= 9.5 && percentage <= 86) {
        setInSeaction(true);
      } else {
        setInSeaction(false);
      }

      if (scrollPosition == 1650 || scrollPosition <= 2363) {
        setTextIndex(0);
      } else if (scrollPosition >= 2363 && scrollPosition < 3915) {
        setTextIndex(1);
      } else if (scrollPosition >= 3915 && scrollPosition < 5210) {
        setTextIndex(2);
      } else if (scrollPosition >= 5210 && scrollPosition < 7152) {
        setTextIndex(3);
      } else if (scrollPosition >= 7152 && scrollPosition < 8809) {
        setTextIndex(4);
      } else if (scrollPosition >= 8809 && scrollPosition < 10764) {
        setTextIndex(5);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={sectionListRef} className="min-h-screen">
      {inSection && (
        <div
          className={clsx(inSection && " fixed", "top-0 left-0 w-1/2 px-12 ")}
        >
          <Texts inView={inSection} data={textsData[textIndex]} />
        </div>
      )}

      <div className=" flex flex-col h-[875vh] w-1/2  md:ml-[50%] ">
        <Images src={imagesData} percentageScrolled={percentageScrolled} />
      </div>
    </div>
  );
};

export default List;



      /// I using this if I don't when using useState



      // srcOne.style.transform = `translateY(${12.51 * percentageScrolled}%)`;
      // srcTWo.style.transform = `translateY(${6.673 * percentageScrolled}%)`;
      // srcThree.style.transform = `translateY(${4.17 * percentageScrolled}%)`;
      // srcFour.style.transform = `translateY(${2.6683 * percentageScrolled}%)`;
      // if (
      //   scrollPosition >= 1800  && scrollPosition < 10000
      // ) {

      //   srcOne1.style.transform = `translateY(${4.133 * percentageScrolled}%)`;
      //   srcTWo1.style.transform = `translateY(${2.104 * percentageScrolled}%)`;
      //   srcThree1.style.transform = `translateY(${1.381 * percentageScrolled }%)`;
      //   srcFour1.style.transform = `translateY(${0.553 * percentageScrolled}%)`;

      //   srcOne2.style.transform = `translateY(${4.133 * percentageScrolled}%)`;
      //   srcTWo2.style.transform = `translateY(${0.553 * percentageScrolled}%)`;

      //   srcOne3.style.transform = `translateY(${4.133* percentageScrolled}%)`;
      //   srcTWo3.style.transform = `translateY(${2.104* percentageScrolled}%)`;
      //   srcThree3.style.transform = `translateY(${1.381 * percentageScrolled}%)`;
      //   srcFour3.style.transform = `translateY(${0.553 * percentageScrolled}%)`;

      //   srcOne4.style.transform = `translateY(${(4.133 * percentageScrolled)}%)`;
      //   srcTWo4.style.transform = `translateY(${(2.104 * percentageScrolled)}%)`;
      //   srcThree4.style.transform = `translateY(${(0.881 * percentageScrolled)}%)`;
      //   srcFour4.style.transform = `translateY(${(0.553 * percentageScrolled)}%)`;

      //   srcOne5.style.transform = `translateY(${(4.1333 * percentageScrolled)}%)`;
      //   srcTWo5.style.transform = `translateY(${(2.104* percentageScrolled)}%)`;
      //   srcThree5.style.transform = `translateY(${(0.881 * percentageScrolled)}%)`;
      //   srcFour5.style.transform = `translateY(${(0.553 * percentageScrolled)}%)`;

      // }