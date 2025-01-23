import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex flex-col  justify-center   min-h-screen">
      <h1 className=" relative text-[200px]  font-semibold text-red-50 ">
        CONTACT
      </h1>
      <div className="flex gap-40 absolute right-32 mt-8 ">
          <Image
            src={"/twitter-icon.svg"}
            alt={"twitter"}
            width={80}
            height={100}
          />
          <Image
            src={"/github-icon.svg"}
            alt={"github"}
            width={80}
            height={100}
          />
          <Image src={"/mail-icon.svg"} alt={"mail"} width={100} height={100} />
          <Image
            src={"/insta-icon.svg"}
            alt={"insta"}
            width={80}
            height={80}
          />
          <Image src={"/web-icon.svg"} alt={"web"} width={100} height={100} />
          <Image
            src={"/linkedin-icon.svg"}
            alt={"linkedin"}
            width={80}
            height={80}
          />
        </div>
      </div>
  );
};

export default Footer;
