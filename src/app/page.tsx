import HomePage from "@/components/home-page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  font-[family-name:var(--font-geist-sans)]  ">
      <main className=" mx-auto px-10">
        <HomePage />
      </main>
    </div>
  );
}


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Images from "./components/images";
// import Texts from "./components/texts";


// const DesignSystem = () => {
//   const sectionListRef = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const sectionList = sectionListRef.current;
//     if (!sectionList) return;

//     const handleScroll = () => {
//       const topPosition = sectionList.getBoundingClientRect().top;
//       const sectionHeight = sectionList.getBoundingClientRect().height;
//       const scrollPosition = window.scrollY + window.innerHeight;

//       if (topPosition < scrollPosition) {
//         setInView(true);
//       } else {
//         setInView(false);
//       }

//       const scrollPercentage = Math.round(
//         ((scrollPosition - topPosition) / sectionHeight) * 100
//       );
//       // if (scrollPosition >= 4000 && scrollPosition < 5200) {
//       //           setTextIndex(1);
//       //           // setInView(true); //why doesn't it work
//       //         } else if (scrollPosition >= 5200 && scrollPosition < 6100) {
//       //           setTextIndex(2);
//       //         } else if (scrollPosition >= 6100 && scrollPosition < 7050) {
//       //           setTextIndex(3);
//       //         } else if (scrollPosition >= 7050 && scrollPosition < 8200) {
//       //           setTextIndex(4);
//       //         } else if (scrollPosition >= 8200 && scrollPosition < 9300) {
//       //           setTextIndex(5);
//       //         } else if (scrollPosition == 1608 || scrollPosition <= 4000) {
//       //           setTextIndex(0);
//       //         }
            
//       if (scrollPercentage >= 0 && scrollPercentage < 20) {
//         setTextIndex(0);
//       } else if (scrollPercentage >= 20 && scrollPercentage < 40) {
//         setTextIndex(1);
//       } else if (scrollPercentage >= 40 && scrollPercentage < 60) {
//         setTextIndex(2);
//       } else if (scrollPercentage >= 60 && scrollPercentage < 80) {
//         setTextIndex(3);
//       } else if (scrollPercentage >= 80 && scrollPercentage < 100) {
//         setTextIndex(4);
//       } else if (scrollPercentage >= 100) {
//         setTextIndex(5);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       ref={sectionListRef}
//       className="flex gap-20 justify-between min-h-screen no-scrollbar"
//     >
//       <div className="relative w-full">
//         <div className="sticky top-0">
//           <Texts inView={inView} data={textsData[textIndex]} />
//         </div>
//       </div>
//       <div className="w-full">
//         <Images src={imagesData}  />
//       </div>
//     </div>
//   );
// };

// export default DesignSystem;