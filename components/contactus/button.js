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

        console.log("Done",watch);
    }

    const SubmitNextButton = ()=>{
        if(step<3){
            return (
                <button 
         
                onClick={onHandleNext} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                
                >
                    Next
    
    </button>
            )
        }else {
            return(
                <button 

                onClick={()=>{console.log("Done",Data)}} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                
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
            <button disabled={step===1}  onClick={onHandlePrevious} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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