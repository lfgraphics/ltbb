import React from 'react'

const secondStep = ({register,errors}) => {
  return (
    <React.Fragment>
        <div className='mt-4 flex flex-col gap-4'>
        <div>
  <label
    htmlFor="username"
    className="block text-sm text-black-500 font-bold dark:text-gray-300"
  >
    Entery Country 
  </label>
  <input
  {...register('country', { required: true })}
    type="text"
    placeholder="John Doe"
    className="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
  />
      {errors.country && <p className='text-red-900 text-sm mt-2'>This field is required</p>}
</div>


<div>
  <label
    htmlFor="username"
    className="block text-sm text-black-500 font-bold dark:text-gray-300"
  >
  Entery city
  </label>
  <input
    {...register('city', { required: true })}
    type="text"
    placeholder="John Doe"
    className="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
  />
        {errors.city && <p className='text-red-900 text-sm mt-2'>This field is required</p>}
</div>
<label
    htmlFor="username"
    className="block text-sm text-black-500 font-bold dark:text-gray-300"
  >
   Whe is a good time to connect with you ?

  </label>

<div className='flex flex-row item-center gap-2'>

<div>
 
<div>

  <input
    {...register('date', { required: true })}
    type="date"
    placeholder=""
    className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
  />
        {errors.date && <p className='text-red-900 text-sm mt-2'>This field is required</p>}
</div>

</div>


<div>

<input
    type="time"
    {...register('time', { required: true })}
    placeholder=""
    className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
  />
</div>
</div>


        </div>
    </React.Fragment>
  )
}

export default secondStep