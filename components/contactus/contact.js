import React from 'react'
import FirstStep from './firstStep'
import Button from './button'
import SecondStep from './secondStep'
import ThirdStep from './thirdStep'
import { useForm } from 'react-hook-form';
import Location1 from './location1'
import Location2 from './location2'
import Location3 from './location3'

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
        <div className='w-screen h-full '>

<div className="w-full max-w-sm h   mx-auto overflow-hidden p-8 bg-white rounded-lg shadow-md mt-36 ">
  
  <h1 className='font-bold'>Getting in touch with TLB is as simple as </h1>
  <p className='text-center font-bold'>{step}/3</p>
  
      
{Step()}
        
        <Button step={step} setStep={setStep} isValid={isValid} watch={watch}></Button>

      
        
</div>
</div>

<h1 className='text-center text-3xl font-bold text-gray-800 underline mt-5 p-4 '>OUR LOCATIONS</h1>
<div className='flex flex-col   w-full items-center justify-center h-full mx-auto gap-4   px-6'>
   
{/*  */}
{/* {Country.map((item,index)=>{
    return(
    
        <Card key={uuidv4()} name={item.name} img={item.img}></Card>
        
    )
})}
 */}

 <Location1  />
 <Location2 />
 <Location3 />



   
</div>
<span className='p-4'></span>


       </React.Fragment>
    )
}

export default Form
