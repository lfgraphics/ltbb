import React from 'react'
import FirstStep from './firstStep'
import Button from './button'
import SecondStep from './secondStep'
import ThirdStep from './thirdStep'
import { useForm } from 'react-hook-form';

const Form = () => {
    const [step,setStep] = React.useState(1);
    const [formState , setFormState] = React.useState(1)
    const {watch,register,formState:{errors},isValid} = useForm({mode:"all"});
    const Step = ()=>{
        if(step===1){
            return (
                <FirstStep register={register} errors={errors} isValid={isValid} ></FirstStep>
            )
        }else if(step ===2){
            return (
                <SecondStep register={register} errors={errors}></SecondStep>
            )
        }else if(step ===3){
            return (
                <ThirdStep register={register} errors={errors}></ThirdStep>
            )
        }
    }
    return (
       <React.Fragment>
        <div className='w-screen h-screen'>
<div className="w-full max-w-sm    mx-auto overflow-hidden p-8 bg-white rounded-lg shadow-md mt-36 ">
  
  <h1 className='font-bold'>Getting in touch with TLB is as simple as </h1>
  <p className='text-center font-bold'>{step}/3</p>
  
      
{Step()}
        
        <Button step={step} setStep={setStep} isValid={isValid} watch={watch}></Button>

      
        
</div>
</div>
       </React.Fragment>
    )
}

export default Form
