import Image from "next/image";
import React from "react";

const DesignSystem = () => {
  return (
    <div className="flex gap-20 justify-between   min-h-screen">
      <div className=" flex flex-col justify-between py-10">
        <h1 className="text-3xl font-medium">01</h1>
        <div className=" space-y-5">
        <h1 className="text-6xl font-semibold py-4 text-black w-fit transition-colors duration-300 ease-in-out translate-x-60 bg-black ">
  FR Design System
</h1>

          <h3 className="text-4xl font-medium">
            Design system lead • Technical PDM
          </h3>
          {/* <h6 className=" text-3xl ">
            Multi brand e-commerce design system for websites and
            native mobile applications.
          </h6> */}
        </div>
        <h1 className="text-3xl font-medium">DESIGN SYSTEM</h1>
      </div>

      <div className="">
        <div className="flex gap-32">
          <Image src={"/image-one.png"} alt={""} width={350} height={0} />
          <Image
            src={"/image-two.png"}
            alt={""}
            width={350}
            height={0}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
