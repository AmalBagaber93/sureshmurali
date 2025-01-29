import React from "react";
import Image from "next/image";



type ImagesProps = {
  src: {
    srcOne?: string;
    srcTWo?: string;
    srcThree?: string;
    srcFour?: string;
} [];
};

const Images = ({ src }: ImagesProps) => {
  return (
    <div className="      ">
      {src.map((img, index) => (
        <div key={index} className="grid grid-cols-2   ">
          <Image id="srcOne" src={img.srcOne || ''} alt={''} width={300} height={200} className="object-contain transform ease-out " />
          <Image id="srcTWo"src={img.srcTWo || ''} alt={''} width={300} height={200} className="o scale-[0.9]" />
          <Image id="srcThree" src={img.srcThree || ''} alt={''} width={300} height={200} className="object-cover scale-[0.7]"/>
          <Image id="srcFour" src={img.srcFour || ''} alt={''} width={300} height={200} className="object-cover scale-[0.6]"/>
        </div>
      ))}
    </div>
  );
};




export default Images;

