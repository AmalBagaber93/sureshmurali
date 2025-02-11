import React from "react";
import Image from "next/image";
import clsx from "clsx";

type ImagesProps = {
  percentageScrolled? : number
  src: {
    srcOne: string;
    attributeSrcOne?: string;
    translateYSrcOne?: number;
    srcTWo: string;
    attributeSrcTwo?: string;
    translateYSrcTwo?: number;
    srcThree?: string;
    attributeSrcThree?: string;
    translateYSrcThree?: number;
    srcFour?: string;
    attributeSrcFour?: string;
    translateYSrcFour?: number;
    isLarge?: boolean;
  }[];
};

const Images = ({ src ,percentageScrolled }: ImagesProps) => {
  console.log("percentageScrolled", percentageScrolled)
  return (
    <>
      {src.map((img, index) => (
        <div
          key={index}
          className=" grid grid-cols-2 justify-between relative z-20 min-h-screen  "
        >


          <Image
            id={`srcOne${index}`}
            priority
            src={img.srcOne || ""}
            alt={""}
            style= {{ bottom: img.attributeSrcOne , transform: `translateY(${( img.translateYSrcOne|| 4.133) * (percentageScrolled || 0) }%)` }}
            width={394}
            height={200}
         className={clsx("absolute left-0 z-40 xl:w-[394px]: lg:w-[344px] w-[300px]  translate-x-0 transition-transform duration-150 ease-linear ")}
          />
          <Image
            id={`srcTWo${index}`}
            loading="eager"

            src={img.srcTWo || ""}
            alt={""}
            width={img.isLarge ? 500 : 350}
            height={200}
            style={ { bottom: img.attributeSrcTwo , transform: `translateY(${ (img.translateYSrcTwo || 2.104) * (percentageScrolled || 0) }%)`}}
            className={clsx(
              " absolute  z-0  transition-transform duration-150 ease-linear translate-x-0 ",
              img.isLarge ? " right-1  w-[500px]" : " right-10 xl:w-[350px]: lg:w-[300px] w-[300px]"
            )}
          />
          {img.srcThree && (
            <Image
              id={`srcThree${index}`}
              style={{ bottom: img.attributeSrcThree ,  transform: `translateY(${ (img.translateYSrcThree ||1.381) * (percentageScrolled || 0) }%)` }}
              src={img.srcThree || ""}
              alt={""}
              width={270}
              height={200}
              className={clsx(
                "absolute object-cover z-0 lg:left-20 left-28 w-[270px] lg:w-[250px] translate-x-0 transition-transform duration-150 ease-linear ",
              )}
           
            />
          )}
          {img.srcFour && (
            <Image
              id={`srcFour${index}`}
              src={img.srcFour || ""}
              alt={""}
              width={240}
              height={200}
              style={{
                bottom: img.attributeSrcFour,
                 transform: `translateY(${ (img.translateYSrcFour||0.553) * (percentageScrolled || 0) }%)`
              }}
              className=" absolute  right-[5vw] scale-[0.6] z-0 w-[200px] lg:w-[190px] translate-x-0 transition-transform duration-150 ease-linear"
            />
          )}
 
        </div>
      ))}
    </>
  );
};

export default Images;






// import React from "react";
// import Image from "next/image";

// type ImagesProps = {

//   src: {
//     srcOne?: string;
//     srcTWo?: string;
//     srcThree?: string;
//     srcFour?: string;
//     isLarge?: boolean;
//   }[];
// };

// const Images = ({ src }: ImagesProps) => {
//   return (
//     <>
//       {src.map((img, index) => (
//         <div key={index} className=" relative z-20 mt-80 ">
//           <Image
//             id={`srcOne${index}`}
//             src={img.srcOne || ""}
//             alt={""}
//             width={300}
//             height={200}
//             className="absolute top[90vh] left-0 "
//           />
//           <Image
//             id={`srcTWo${index}`}
//             src={img.srcTWo || ""}
//             alt={""}
//             width={img.isLarge ? 700:300}
//             height={200}
//             className=" absolute  top-[45vh] right-[2vw] scale-[0.9] z-20  transition-transform duration-150 ease-out    "
//           />
//           {img.srcThree && (
//             <Image
//               id={`srcThree${index}`}
//               src={img.srcThree || ""}
//               alt={""}
//               width={img.isLarge ? 500: 300}
//               height={200}
//               className="absolute object-cover scale-[0.7] z-0  top-[75vh] left-[2 vw]"
//             />
//           )}
//           {img.srcFour && (
//             <Image
//               id={`srcFour${index}`}
//               src={img.srcFour || ""}
//               alt={""}
//               width={300}
//               height={200}
//               className=" absolute top-[55vh] right-[5 vw] scale-[0.6] z-0"
//             />
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

// // export default Images;
// // const Images = ({ src ,textIndex}: ImagesProps) => {
// // //   return (
// //   // Use the textIndex to apply transformations or change the displayed images
// //   return (
// //     <div>
// //       {src.map((image, index) => (
// //         <img
// //           key={index}
// //           src={image.srcOne}
// //           style={{
// //             transform: `translateY(${textIndex === index ? -90 : 0}%)`,
// //           }}
// //         />
// //         // Add other images and transformations as needed
// //       ))}
// //     </div>
// //   );
// // };

// // export default Images;

// // const Images = ({ src ,textIndex}: ImagesProps) => {

// //   return (
// //     <div>
// //      {src.map((img, index) => (
// //         <div key={index} className="grid grid-cols-2 z-20 mt-80 ">
// //           <Image
// //             id={`srcOne${index}`}
// //             src={img.srcOne || ""}
// //             alt={""}
// //             width={300}
// //             height={200}
// //             className={`translate-y-(${textIndex === index ? -90 : 0}%)`}
// //           />
// //           <Image
// //             id={`srcTWo${index}`}
// //             src={img.srcTWo || ""}
// //             alt={""}
// //             width={300}
// //             height={200}
// //             className={`translate-y-(${textIndex === index ? -90 : 0}%) scale-[0.9] z-20`}
// //           />
// //           {img.srcThree && (
// //             <Image
// //               id={`srcThree${index}`}
// //               src={img.srcThree || ""}
// //               alt={""}
// //               width={img.isLarge ? 500: 300}
// //               height={200}
// //               className={`translate-y-(${textIndex === index ? -90 : 0}%) scale-[0.9] z-20 `}
// //             />
// //           )}
// //           {img.srcFour && (
// //             <Image
// //               id={`srcFour${index}`}
// //               src={img.srcFour || ""}
// //               alt={""}
// //               width={300}
// //               height={200}
// //               className="scale-[0.6] z-0"
// //             />
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// export default Images;
