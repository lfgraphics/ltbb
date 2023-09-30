"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FirstStep from "./firstStep";
import Button from "./button";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";

const ContactForm = () => {
  const [step, setStep] = React.useState(1);
  const [formState, setFormState] = React.useState(1);
  const {
    watch,
    register,
    formState: { errors },
    isValid,
  } = useForm({ mode: "all" });
  const Step = () => {
    if (step === 1) {
      return (
        <FirstStep
          register={register}
          errors={errors}
          isValid={isValid}
        ></FirstStep>
      );
    } else if (step === 2) {
      return <SecondStep register={register} errors={errors}></SecondStep>;
    } else if (step === 3) {
      return <ThirdStep register={register} errors={errors}></ThirdStep>;
    }
  };
  return (
    <React.Fragment>
      <div className="w-screen min-h-screen h-full flex justify-center items-center">
        <div className="w-full max-w-sm h  mx-auto overflow-hidden p-8 bg-white rounded-lg shadow-md ">
          <h1 className="font-bold">
            Getting in touch with TLB is as simple as{" "}
          </h1>
          <p className="text-center font-bold">{step}/3</p>

          {Step()}

          <Button
            step={step}
            setStep={setStep}
            isValid={isValid}
            watch={watch}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
