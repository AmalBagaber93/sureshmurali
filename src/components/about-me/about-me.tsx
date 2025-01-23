import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col  justify-center  min-h-screen">
      <h1 className=" relative text-[200px]  font-semibold text-red-50 ">
        ABOUT ME
      </h1>
      <div className="absolute justify-items-end right-28 ">
        <h5 className="  text-4xl w-5/6">
          Crafting user friendly and aesthetic UI designs is not just my profession, 
          it's my passion.
        </h5>
      </div>
    </div>
  );
};

export default AboutMe;
