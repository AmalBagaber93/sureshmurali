import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col  justify-center   min-h-screen">
             <h1 className="text-[80px] md:text-[200px] font-semibold  text-red-100 absolute  right-0  z-0 mt-96" >
        SKILLS
      </h1>
      <div className="flex  justify-between gap-16 relative z-10 pl-64 pr-48">
        <div className=" space-y-12">
          <div>
            <h1 className="text-4xl">Product Design</h1>
            <h1 className="text-4xl">Design system</h1>
            <h1 className="text-4xl">Information architect</h1>
          </div>

          <div>
            <h1 className="text-4xl">HTML & CSS</h1>
            <h1 className="text-4xl">React</h1>
            <h1 className="text-4xl">Node JS</h1>
          </div>
        </div>
        <div className=" space-y-12">
          <div>
            <h1 className="text-4xl">Project Management</h1>
            <h1 className="text-4xl">Visual Communication</h1>
            <h1 className="text-4xl">Concept development</h1>
          </div>

          <div>
            <h1 className="text-4xl">Figma</h1>
            <h1 className="text-4xl">Sketch</h1>
            <h1 className="text-4xl">Principle</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
