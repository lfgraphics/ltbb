import React from 'react'

const button = ({step,setStep,isValid,watch}) => {
   
    const Data= JSON.stringify(watch(),null,2)
    const onHandleNext = ()=>{
        setStep(cur => cur+1)
    }
    const onHandlePrevious = ()=>{
        setStep(cur => cur-1)
    }
    const onHandleSubmit =()=>{

        
    }

    const SubmitNextButton = ()=>{
        if(step<3){
            return (
                
                <button 
         
                onClick={onHandleNext} className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                
                >
                    Next
    
    </button>
            )
        }else {
            return(
                <button 

                onClick={()=>{onHandleSubmit}} className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                
                >
                   Submit
    
    </button>

            )
           
        }
    }
  return (
    <React.Fragment>
          <div className='flex gap-4  justify-center mt-4 p-2 '>
            <div>
            <button disabled={step===1}  onClick={onHandlePrevious} className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
    Previous
</button>
            </div>

            <div>
               {SubmitNextButton()}
           
            </div>
        </div>
    </React.Fragment>
  )
}

export default button