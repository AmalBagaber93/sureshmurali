import React from "react";

type BlackBackgroundProps = {
  inView?: boolean; 
  children: React.ReactNode; 
  attributeText:string
};

const BlackBackground = ({
  children,
  inView = true,
  attributeText
}: BlackBackgroundProps) => {
  return (
    <div className="relative w-fit h-fit overflow-hidden">
      <div className={`${attributeText} ${inView &&'animate-text'} relative z-10"`}>{children}</div>
      <div
        className={`absolute top-0 left-0 h-full w-full transition-all duration-150 z-0 ${
          inView ? "animate-progress" : ""
        }`}
      ></div>
    </div>
  );
};

export default BlackBackground;

