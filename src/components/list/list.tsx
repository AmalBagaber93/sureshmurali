"use client";

import React, { useEffect, useRef, useState } from "react";
import Images from "./components/images";
import Texts from "./components/texts";
import clsx from "clsx";

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
    srcTWo: "/image-six.png",
    srcThree: "/image-seven.png",
    srcFour: "/image-nine.png",
  },

  { srcOne: "/image-ten.png", srcTWo: "/image-eleven.png", isLarge: true },
  {
    srcOne: "/image-twelve.png",
    srcTWo: "/image-thirteen.png",
    srcThree: "/image-fourteen.png",
    srcFour: "/image-fifteen.png",
  },
  {
    srcOne: "/food-one.png",
    srcTWo: "/food-two.png",
    srcThree: "/food-three.png",
    srcFour: "/food-four.png",
  },
  {
    srcOne: "/voistrap-one.png",
    srcTWo: "/voistrap-two.png",
    srcThree: "/voistrap-three.png",
    srcFour: "/voistrap-four.png",
  },
];
const DesignSystem = () => {
  const sectionListRef = useRef<HTMLInputElement>(null);
  const [inView, setInView] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [increment, setIncrement] = useState(false);

  useEffect(() => {
    setInView(false);
  }, [textIndex]);
  useEffect(() => {
    const handleScroll = () => {
      const srcOne = document.getElementById("srcOne0");
      const srcTWo = document.getElementById("srcTWo0");
      const srcThree = document.getElementById("srcThree0");
      const srcFour = document.getElementById("srcFour0");
      const srcOne1 = document.getElementById("srcOne1");
      const srcTWo1 = document.getElementById("srcTWo1");
      const srcThree1 = document.getElementById("srcThree1");
      const srcFour1 = document.getElementById("srcFour1");
      const srcOne2 = document.getElementById("srcOne2");
      const srcTWo2 = document.getElementById("srcTWo2");
      const srcOne3 = document.getElementById("srcOne3");
      const srcTWo3 = document.getElementById("srcTWo3");
      const srcThree3 = document.getElementById("srcThree3");
      const srcFour3 = document.getElementById("srcFour3");
      const srcOne4 = document.getElementById("srcOne4");
      const srcTWo4 = document.getElementById("srcTWo4");
      const srcThree4 = document.getElementById("srcThree4");
      const srcFour4 = document.getElementById("srcFour4");
      const srcOne5 = document.getElementById("srcOne5");
      const srcTWo5 = document.getElementById("srcTWo5");
      const srcThree5 = document.getElementById("srcThree5");
      const srcFour5 = document.getElementById("srcFour5");
      if (
        !sectionListRef.current ||
        !srcOne ||
        !srcTWo ||
        !srcThree ||
        !srcFour ||
        !srcOne1 ||
        !srcTWo1 ||
        !srcThree1 ||
        !srcFour1 ||
        !srcOne2 ||
        !srcTWo2 ||
        !srcOne3 ||
        !srcTWo3 ||
        !srcThree3 ||
        !srcFour3 ||
        !srcOne4 ||
        !srcTWo4 ||
        !srcThree4 ||
        !srcFour4 ||
        !srcOne5 ||
        !srcTWo5 ||
        !srcThree5 ||
        !srcFour5
      )
        return;

      const topPosition = sectionListRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionListRef.current.getBoundingClientRect().height;
      const scrollPosition = window.scrollY;

      const percentageScrolled =((topPosition - scrollPosition) / sectionHeight) * 100;

      console.log("scrollPosition", scrollPosition);
  

      srcOne.style.top = "-43vh";
      srcTWo.style.top = "-55vh";
        srcThree.style.top = "-8vh";
        srcFour.style.top = "-7vh";

        srcOne1.style.bottom = "-50vh";
        srcTWo1.style.bottom = "5vh";
       srcThree1.style.bottom = "-15vh"
        srcFour1.style.bottom = "-7vh";

        srcOne2.style.bottom = "-225vh";
        srcTWo2.style.bottom = "-70vh";

        srcOne3.style.bottom = "-377vh";
        srcTWo3.style.bottom = "-200vh";
        srcThree3.style.bottom = "-172vh";
        srcFour3.style.bottom = "-130vh";

        srcOne4.style.bottom = "-550vh";
        srcTWo4.style.bottom = "-313vh";
        srcThree4.style.bottom = "-256vh";
        srcFour4.style.bottom = "-202vh";

        srcOne5.style.bottom = "-747vh";
        srcTWo5.style.bottom = "-465vh";
        srcThree5.style.bottom = "-370vh";
        srcFour5.style.bottom = "-293vh";
        
        srcOne.style.transform = `translateY(${12.51 * percentageScrolled}%)`;
        srcTWo.style.transform = `translateY(${6.673 * percentageScrolled}%)`;
        srcThree.style.transform = `translateY(${4.17 * percentageScrolled}%)`;
        srcFour.style.transform = `translateY(${2.6683 * percentageScrolled}%)`;
      if (percentageScrolled < 0) {
        setInView(true);
    

      } else {
        setInView(false);
      }
      if (scrollPosition >= 1277 && scrollPosition <= 10400) {
  setIncrement(true)
}
else{
  setIncrement(false);
}


      console.log("percentageScrolled", percentageScrolled)
      if (
        scrollPosition == 1650 ||
        (scrollPosition <= 2363 && percentageScrolled < 0)
      ) {
      ;
        // console.log("lll", increment);
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

      if (
        scrollPosition >= 1800  && scrollPosition < 10000
      ) {
      
        srcOne1.style.transform = `translateY(${4.133 * percentageScrolled}%)`;
        srcTWo1.style.transform = `translateY(${2.104 * percentageScrolled}%)`;
        srcThree1.style.transform = `translateY(${1.381 * percentageScrolled }%)`;
        srcFour1.style.transform = `translateY(${0.553 * percentageScrolled}%)`;
        
        srcOne2.style.transform = `translateY(${4.133 * percentageScrolled}%)`;
        srcTWo2.style.transform = `translateY(${0.553 * percentageScrolled}%)`;

        srcOne3.style.transform = `translateY(${4.133* percentageScrolled}%)`;
        srcTWo3.style.transform = `translateY(${2.104* percentageScrolled}%)`;
        srcThree3.style.transform = `translateY(${1.381 * percentageScrolled}%)`;
        srcFour3.style.transform = `translateY(${0.553 * percentageScrolled}%)`;
      
      
        srcOne4.style.transform = `translateY(${(4.133 * percentageScrolled)}%)`;
        srcTWo4.style.transform = `translateY(${(2.104 * percentageScrolled)}%)`;
        srcThree4.style.transform = `translateY(${(1.381 * percentageScrolled)}%)`;
        srcFour4.style.transform = `translateY(${(0.553 * percentageScrolled)}%)`;

   
      
        srcOne5.style.transform = `translateY(${(4.133 * percentageScrolled)}%)`;
        srcTWo5.style.transform = `translateY(${(2.104 * percentageScrolled)}%)`;
        srcThree5.style.transform = `translateY(${(1.381 * percentageScrolled)}%)`;
        srcFour5.style.transform = `translateY(${(0.553 * percentageScrolled)}%)`;
        
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={sectionListRef} className="  min-h-screen ">
      {increment && (
        <div
          className={clsx(
            increment && " fixed",
            "  top-0 left-0 w-1/2 px-12 "
          )}
        >
        {/* {console.log('hey i am here weird', increment)} */}
        

          <Texts inView={inView} data={textsData[textIndex]} />
        </div>
      )}

      <div className=" flex flex-col h-[880vh] w-1/2  ml-[50%] ">
        <Images src={imagesData} />
      </div>
    </div>
  );
};

export default DesignSystem;



