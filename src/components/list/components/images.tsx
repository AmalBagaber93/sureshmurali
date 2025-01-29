import React from "react";
import Image from "next/image";

type ImagesProps = {
  src: {
    srcOne?: string;
    srcTWo?: string;
    srcThree?: string;
    srcFour?: string;
  }[];
};

const Images = ({ src }: ImagesProps) => {
  return (
    <>
      {src.map((img, index) => (
        <div key={index} className="grid grid-cols-2   ">
          <Image
            id="srcOne"
            src={img.srcOne || ""}
            alt={""}
            width={300}
            height={200}
          />
          <Image
            id="srcTWo"
            src={img.srcTWo || ""}
            alt={""}
            width={300}
            height={200}
            className="scale-[0.9]"
          />
          {img.srcThree && (
            <Image
              id="srcThree"
              src={img.srcThree || ""}
              alt={""}
              width={300}
              height={200}
              className="object-cover scale-[0.7]"
            />
          )}
          {img.srcFour && (
            <Image
              id="srcFour"
              src={img.srcFour || ""}
              alt={""}
              width={300}
              height={200}
              className="object-cover scale-[0.6]"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Images;
