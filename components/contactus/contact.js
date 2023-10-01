import React from "react";
import FirstStep from "./firstStep";
import Button from "./button";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";
import { useForm } from "react-hook-form";
import Location1 from "./location1";
import Location2 from "./location2";
import Location3 from "./location3";
import ContactForm from "./ContactForm";

const Form = () => {
  return (
    <React.Fragment>
      <ContactForm />

      <h1 className="text-center text-3xl font-bold text-gray-800 underline mt-5 p-4 ">
        OUR LOCATIONS
      </h1>
      <div className="flex flex-col   w-full items-center justify-center h-full mx-auto gap-4   px-6">
        {/*  */}
        {/* {Country.map((item,index)=>{
    return(
    
        <Card key={uuidv4()} name={item.name} img={item.img}></Card>
        
    )
})}
 */}

        <Location1 />
        <Location2 />
        <Location3 />
      </div>
      <span className="p-4"></span>
    </React.Fragment>
  );
};

export default Form;
