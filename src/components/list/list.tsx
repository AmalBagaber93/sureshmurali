"use client";

import React, { useEffect, useRef, useState } from "react";
import Images from "./components/images";
import Texts from "./components/texts";

const textsData = [
  {
    id: "01",
    title: "FR Design System",
    category: "Design System Lead • Technical PDM",
    description:
      "Multi brand e-commerce design system for websites and native mobile applications.",
    footerTitle: "DESIGN SYSTEM",
  },
  {
    id: "02",
    title: "LASHIC",
    category: "Design lead",
    description:
      "Mobile app and websites for senior citizen facilitys caregivers service managers and admins.",
    footerTitle: "APP SUITE",
  },
  {
    id: "03",
    title: "Eyep",
    category: "UI Designer  •  Front-end Developer",
    description: "Single purpose website to show your IP address and location.",
    footerTitle: "WEB APP",
  },
  {
    id: "04",
    title: "Tesla app",
    category: "UI Designer",
    description: "iOS app concept to control Tesla cars remotely.",
    footerTitle: "APP CONCEPT",
  },
  {
    id: "05",
    title: "WhatsMyFood",
    category: "UI Designer  •  Front-end Developer",
    description:
      "iOS app to remember your fav food at each restaurant you eat.",
    footerTitle: "iOS APP",
  },
  {
    id: "06",
    title: "Voistrap",
    category: "UI Designer  •  Full Stack Developer",
    description:
      "Web app project to give workplace insights using indoor localization, voice and schedule",
    footerTitle: "iOS APP",
  },
];
const imagesData = [
  {
    srcOne: "/image-one.png",
    srcTWo: "/image-two.png",
    srcThree: "/image-three.png",
    srcFour: "/image-four.png",
  },
{  
  srcOne: "/image-five.png",
    srcTWo:"/image-six.png",
    srcThree: "/image-seven.png",
   srcFour:"/image-nine.png"},

 {   srcOne:"/image-ten.png",
  srcTWo:"/image-eleven.png"},
{  srcOne:"/image-twelve.png",
   srcTWo:"/image-thirteen.png",
   srcThree:"/image-fourteen.png",
   srcFour:  "/image-fifteen.png",},
   {  srcOne:"/food-one.png",
    srcTWo:"/food-two.png",
    srcThree:"/food-three.png",
    srcFour:  "/food-four.png",},
    {  srcOne:"/voistrap-one.png",
      srcTWo:"/voistrap-two.png",
      srcThree:"/voistrap-three.png",
      srcFour:  "/voistrap-four.png",},

];
const DesignSystem = () => {
  const sectionListRef = useRef<HTMLInputElement>(null);
  const [inView, setInView] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  useEffect(()=>{
    setInView(false)
  }, [textIndex])
  useEffect(() => {
    const handleScroll = () => {
      const srcOne = document.getElementById("srcOne");
      const srcTWo = document.getElementById("srcTWo");
      const srcThree = document.getElementById("srcThree");
      const srcFour = document.getElementById("srcFour");
      if (!sectionListRef.current || !srcOne || !srcTWo || !srcThree ||!srcFour) return;
      const topPosition = sectionListRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionListRef.current.getBoundingClientRect().height;
      const scrollPosition = window.scrollY + window.innerHeight;
      const newPosition = Math.round(((scrollPosition - topPosition) / sectionHeight) * 100);
      console.log(`topPosition ${topPosition}`)
      console.log(`scrollPosition ${scrollPosition}`)
      if (topPosition < scrollPosition) {
        setInView(true); //work
        srcOne.style.transform = `translateY(${-50 + newPosition}%)`
        srcTWo.style.transform = `translateY(${-38 + newPosition}%)`
        srcThree.style.transform = `translateY(${-24 + newPosition}%)`
        srcFour.style.transform = `translateY(${-9 + newPosition}%)`


      } else {
        setInView(false);
      }
      // console.log(scrollPosition)
      if (scrollPosition >= 4000 && scrollPosition < 5200) {
        setTextIndex(1);
        // setInView(true); //why doesn't it work
      } else if (scrollPosition >= 5200 && scrollPosition < 6100) {
        setTextIndex(2);
      } else if (scrollPosition >= 6100 && scrollPosition < 7050) {
        setTextIndex(3);
      } else if (scrollPosition >= 7050 && scrollPosition < 8200) {
        setTextIndex(4);
      } else if (scrollPosition >= 8200 && scrollPosition < 9300) {
        setTextIndex(5);
      }else if (scrollPosition == 1608 || scrollPosition <= 4000){
        setTextIndex(0);
      }
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={sectionListRef}
      className="flex gap-20 justify-between min-h-screen no-scrollbar"
    >
      <div className="relative w-full">
        <div className="sticky top-0">
          <Texts inView={inView} data={textsData[textIndex]} />
        </div>
      </div>
      <div className="w-full  ">
        <Images src={imagesData} />
      </div>
    </div>
  );
};

export default DesignSystem;
