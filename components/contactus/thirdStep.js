import React from 'react'

const thirdStep = () => {
  return (
    <React.Fragment>
        <div className='mt-4 flex flex-col gap-4'>
        <div>
  <label
    htmlFor="username"
    className="block text-sm text-black-500 font-bold dark:text-gray-300"
  >
 Name
  </label>
  <input
    type="text"
    placeholder="Name"
    className="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
  />
</div>
<div>
  <label
    htmlFor="username"
    className="block text-sm text-black-500 font-bold dark:text-gray-300"
  >
 Email
  </label>
  <input
    type="Email"
    placeholder="Email"
    className="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
  />
</div>

<div>
  <label
    htmlFor="username"
    className="block text-sm text-black-500 font-bold dark:text-gray-300"
  >
Designation

  </label>
  <input
    type="text"
    placeholder="Designation
    "
    className="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
  />
</div>

<div>
  <label
    htmlFor="username"
    className="block text-sm text-black-500 font-bold dark:text-gray-300"
  >
Phone Number

  </label>
  <input
    type="text"
    placeholder="Phone Number
    "
    className="block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
  />
</div>
        </div>
    </React.Fragment>
  )
}

export default thirdStep