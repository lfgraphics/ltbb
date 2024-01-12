"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FirstStep from "./firstStep";
import Button from "./button";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";

const ContactForm = ({ title, message }) => {
  const [step, setStep] = React.useState(1);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    isValid,
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
  }

  const Step = () => {
    if (step === 1) {
      return (
        <FirstStep
          register={register}
          errors={errors}
          isValid={isValid}
        />
      );
    } else if (step === 2) {
      return <SecondStep register={register} errors={errors}></SecondStep>;
    } else if (step === 3) {
      return <ThirdStep register={register} errors={errors}></ThirdStep>;
    }
  };

  return (
    <React.Fragment>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center">{title}</h2>
      <div className="w-full max-w-sm h  overflow-hidden p-8 bg-white rounded-lg shadow-md">
        {isSubmitSuccessful && <p className="text-green-500 text-center mb-2">Your form has been sent successfully</p>}
        <h1 className="font-bold text-center">
          {message}
        </h1>
        <p className="text-center font-bold">{step}/3</p>

        <form onSubmit={handleSubmit(onSubmit)} >
          {Step()}
        </form>

        <Button
          step={step}
          setStep={setStep}
          isValid={isValid}
          watch={watch}
          submitForm={handleSubmit(onSubmit)}
        ></Button>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
