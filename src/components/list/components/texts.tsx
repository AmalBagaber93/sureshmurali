import React from "react";
import BlackBackground from "./black-background";

type Data = {
  id: string;
  title: string;
  category: string;
  description: string;
  footerTitle: string;
};

type TextsProps = {
  inView?: boolean;
  data: Data;
};
const Texts = ({ inView, data }: TextsProps) => {
  return (
    <div className="flex flex-col py-10 min-h-screen">
      <BlackBackground inView={inView} attributeText="text-2xl font-semibold  ">
        {data.id}
      </BlackBackground>
      <div className="space-y-10 pt-44 pb-[450px] px-10 ">
        <BlackBackground
          inView={inView}
          attributeText="text-7xl font-semibold text-gray-800"
        >
          {data.title}
        </BlackBackground>
        <div className="space-y-5">
          <BlackBackground inView={inView} attributeText="text-3xl font-medium">
            {data.category}
          </BlackBackground>
          <BlackBackground inView={inView} attributeText="text-3xl ">
            {data.description}
          </BlackBackground>
        </div>
      </div>
      <BlackBackground inView={inView} attributeText="text-2xl font-semibold">
        {data.footerTitle}
      </BlackBackground>
    </div>
  );
};

export default Texts;
