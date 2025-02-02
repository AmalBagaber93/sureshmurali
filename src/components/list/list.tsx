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
    srcTWo: "/image-six.png",
    srcThree: "/image-seven.png",
    srcFour: "/image-nine.png",
  },

  { srcOne: "/image-ten.png", srcTWo: "/image-eleven.png", isLarge:true },
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
  const lastScrollYRef = useRef(0);
  const incrementRef = useRef(0);


  const [inView, setInView] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [increment, setIncrement] = useState(0);


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
        !sectionListRef.current  ||
        !srcOne ||
        !srcTWo ||
        !srcThree ||
        !srcFour ||
        !srcOne1||
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
      const sectionHeight =
        sectionListRef.current.getBoundingClientRect().height;
        //+ window.innerHeight;
      const scrollPosition = window.scrollY 
      const newPosition = Math.round(
        ((scrollPosition - topPosition) / sectionHeight) * 100
      );
   
      const percentageScrolled = ((scrollPosition - topPosition) / sectionHeight) * 100;
      // const newIndex = Math.min(Math.floor(percentageScrolled * textsData.length), textsData.length - 1);
      // setTextIndex(newIndex);
      
      const isScrollingDown = scrollPosition > lastScrollYRef.current;
   
      // incrementRef.current = isScrollingDown ? incrementRef.current + 1 : incrementRef.current - 1;
      incrementRef.current = percentageScrolled
      if (isScrollingDown) {
        incrementRef.current += 20;;
      } else {
        incrementRef.current -=  20;
      }
  


      console.log('scrollPosition' ,scrollPosition)
      console.log('percentageScrolled' ,percentageScrolled)
      console.log('incrementRef' ,  incrementRef)
      console.log('incremtopPositionentRef' ,  topPosition)
      console.log('newPosition' ,newPosition) 
      if (topPosition < scrollPosition) {
     
        setInView(true);
        srcOne.style.transform = `translateY(${-70 +-incrementRef.current +8}%)`;
        srcTWo.style.transform = `translateY(${-40 + -incrementRef.current+2}%)`;
        srcThree.style.transform = `translateY(${-24 + -incrementRef.current+1 }%)`;
        srcFour.style.transform = `translateY(${-10 +  -incrementRef.current }%)`;
        srcOne1.style.transform = `translateY(${-4 +  -incrementRef.current+8 }%)`;
        srcTWo1.style.transform = `translateY(${-24 + incrementRef.current+2 }%)`;
        srcThree1.style.transform = `translateY(${-24 + incrementRef.current +1}%)`;
        srcFour1.style.transform = `translateY(${-24 + incrementRef.current }%)`;
        srcOne2.style.transform = `translateY(${-60 +  incrementRef.current +8}%)`;
        srcTWo2.style.transform = `translateY(${-38 +  incrementRef.current +2}%)`;
        srcOne3.style.transform = `translateY(${-60 +  incrementRef.current+8 }%)`;
        srcTWo3.style.transform = `translateY(${-38 +  incrementRef.current+2}%)`;
        srcThree3.style.transform = `translateY(${-24 + incrementRef.current+1 }%)`;
        srcFour3.style.transform = `translateY(${-24 + incrementRef.current }%)`;
        srcOne4.style.transform = `translateY(${-60 +  incrementRef.current+8 }%)`;
        srcTWo4.style.transform =`translateY(${-38 +  incrementRef.current+2}%)`;
        srcThree4.style.transform =`translateY(${-24 + incrementRef.current+1 }%)`;
        srcFour4.style.transform = `translateY(${-24 + incrementRef.current }%)`;
        srcOne5.style.transform = `translateY(${-60 +  incrementRef.current +8 }%)`;
        srcTWo5.style.transform =`translateY(${-38 +  incrementRef.current+2}%)`;
        srcThree5.style.transform = `translateY(${-24 + incrementRef.current+1 }%)`;
        srcFour5.style.transform = `translateY(${-24 + incrementRef.current }%)`;

        // srcThree2.style.transform = `translateY(${-24 + newPosition}%)`;
        // srcFour2.style.transform = `translateY(${-9 + newPosition}%)`;
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
      } else if (scrollPosition == 1608 || scrollPosition <= 4000) {
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