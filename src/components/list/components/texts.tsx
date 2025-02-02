import React from 'react'
import BlackBackground from './black-background'

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
const Texts = ({inView, data}:TextsProps) => {
   
  return (
    // justify-between
    <div className="flex flex-col py-10 min-h-screen">

    <BlackBackground inView={inView} attributeText="text-2xl font-semibold  ">
     {data.id}
    </BlackBackground>
    <div className="space-y-10 pt-20 pb-[510px] ">
      <BlackBackground
        inView={inView}
        attributeText="text-6xl font-semibold"
      >
       {data.title}
      </BlackBackground>
<div className="space-y-3">
<BlackBackground inView={inView} attributeText="text-3xl font-medium">
     {data.category}
      </BlackBackground>
      <BlackBackground inView={inView} attributeText="text-2xl font-medium">
     {data.description}
      </BlackBackground>
</div>
 
    </div>
    <BlackBackground inView={inView} attributeText="text-2xl font-semibold">
     {data.footerTitle}
    </BlackBackground>


  </div>
  )
}

export default Texts
