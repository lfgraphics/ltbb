import React from 'react'

const firstStep = () => {
  return (
    <React.Fragment>
        <div className='mt-4 flex flex-col gap-4'>
            <div>
  <label
    htmlFor="countries_multiple"
    className="block mb-2 text-sm font-bold text-black dark:text-white"
  >
   Which of our Legal Solutions do you want to inquire about?
  </label>
  <select
    multiple=""
    id="countries_multiple"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose countries</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  </div>

  <div>
  <label
    htmlFor="countries_multiple"
    className="block mb-2 text-sm font-bold text-black dark:text-white"
  >
   What Service do you want to avail?

  </label>
  <select
    multiple=""
    id="countries_multiple"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose countries</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  </div>

  <div>
  <label
    htmlFor="countries_multiple"
    className="block mb-2 text-sm font-bold text-black dark:text-white"
  >
What is your area of business?

  </label>
  <select
    multiple=""
    id="countries_multiple"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose countries</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  </div>
  </div>
    </React.Fragment>
  )
}

export default firstStep