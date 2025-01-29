"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const AboutMe = () => {
  const sectionAboutMeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const titleMotion = document.getElementById("titleMotion");
      if (!sectionAboutMeRef.current || !titleMotion) return;

      const topPosition = sectionAboutMeRef?.current?.getBoundingClientRect().top;
      const sectionHeight = sectionAboutMeRef.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      const newPosition = Math.round(((windowHeight - topPosition) / sectionHeight) * 100
      );
      if (topPosition < windowHeight) {
        titleMotion.style.opacity = "1";
        titleMotion.style.transform = `translateX(${-60 + newPosition}%)`;
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
      className="flex flex-col justify-center  min-h-screen mb-60"
    >
      <h1
        id="titleMotion"
        className={clsx(
          "relative text-[200px]  font-semibold text-gray-100 transition-transform duration-1000 ease-out opacity-0  "
        )}
      >
        ABOUT ME
      </h1>
      <div className="absolute justify-items-end ">
        <h5 className="text-4xl w-5/6">
          Crafting user-friendly and aesthetic UI designs is not just my
          profession, it's my passion.
        </h5>
      </div>
    </div>
  );
};

export default AboutMe;

// 'use client'
// import React, { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// const AboutMe = () => {
//   const sectionPinRef = useRef(null);
//   const [inView, setInView] = useState(false);
//   const [po, setPo] = useState(0);
//   // useEffect(() => {
//   //   const boxes = document.querySelectorAll(".box");

//   //   const observer = new IntersectionObserver((entries) => {
//   //    const ui = "opacity-100 , translate-x-8"
//   //     entries.forEach((entry) => {

//   //       console.log(entry.intersectionRect)
//   //       if (entry.isIntersecting) {
//   //           entry.target.classList.add("opacity-100", "translate-x-8");
//   //         } else {

//   //           entry.target.classList.remove("opacity-100", "translate-x-8");
//   //         }
//   //       });
//   //     }, { threshold: 1 });
//   //   // observer.observe(boxes[0])

//   //   boxes.forEach((box) => observer.observe(box));

//   //   return () => observer.disconnect();
//   // }, []);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionPinRef.current || !train) return;
//       const train = document.getElementById('trainMotion');

//       const topPosition = sectionPinRef.current.getBoundingClientRect().top;
//       const scrollPosition = window.scrollY + window.innerHeight;

//       const newPosition = Math.round((topPosition / sectionPinRef.current.getBoundingClientRect().height) * 100);

//       console.log(`translate-x-[${newPosition}%]`)
//       if (topPosition < scrollPosition) {
//         train.style.opacity = '1';
//         train.style.transform = `translateX(-${newPosition}%)`;
//         train.style.translate = 'transform 0.3s ease';

//         // train?.classList.add(style={});
//         setInView(true);
//       } else {

//         train.style.opacity = '0';
//         train.style.transform = `translateX(0)`;
//         setInView(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     // window.scroll()

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   console.log(inView)

//   return (
//     <div ref={sectionPinRef} className="flex flex-col justify-center items-center min-h-screen bg-red-700">
//       <h1  id="trainMotion" className={clsx("box relative text-[200px] font-semibold text-gray-500 " )}>
//         ABOUT ME
//       </h1>
//       <div className="absolute justify-items-end pl-72 pt-14">
//         <h5 className="text-4xl w-5/6">
//           Crafting user-friendly and aesthetic UI designs is not just my
//           profession, it's my passion.
//         </h5>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
