import React from 'react'
import Country from './assets/country'
const location1 = () => {
  return (
    <React.Fragment>
        <div className='flex gap-4 '>

        <div className='flex-1 w-1/4'>


    <div className="w-full cursor-pointer max-w-4xl p-6 overflow-hidden bg-white rounded-xl shadow-lg">
  <img
    className="object-cover rounded-lg w-full h-56"
    src={Country[0].img}
    alt="avatar"
  />
  {/* <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 "
      tabIndex={0}
      role="link"
    >
    {Country[0].name}
    </a>
    <span className="text-sm text-gray-700 ">
    
    </span>
  </div> */}
</div>

    </div>
    {/* ==================== */}

    <div className='flex-2 w-2/3 '>
    <div className="max-w-2xl px-8 py-4 h-64 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <div className="flex items-center justify-between">
    <span className="text-sm font-light text-gray-600 dark:text-gray-400">
      {Country[0].name}
    </span>
    <a
      className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
      tabIndex={0}
      role="button"
    >
      TLB
    </a>
  </div>
  <div className="mt-2">
    <a
      href="#"
      className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
      tabIndex={0}
      role="link"
    >
   Address
    </a>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      {Country[0].address}
    </p>
  </div>
  <div className="flex items-center justify-between mt-4">
    <a
      href="#"
      className="text-blue-600 dark:text-blue-400 hover:underline"
      tabIndex={0}
      role="link"
    >
      {Country[0].phone}
    </a>
    <div className="flex items-center">
      {/* <img
        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
        alt="avatar"
      /> */}
      <a
        className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
        tabIndex={0}
        role="link"
      >
      {Country[0].email}
      </a>
    </div>
  </div>
</div>

        </div>    
        </div>
    </React.Fragment>
  )
}

export default location1