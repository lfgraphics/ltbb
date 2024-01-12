import React from "react";

const commonStyle = "block   mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "

const thirdStep = ({ register, errors }) => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div>
        <label
          htmlFor="username"
          className="block text-sm text-black-500 font-bold dark:text-gray-300"
        >
          Name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
          className={commonStyle}
        />
        {errors.name && (
          <p className="text-red-900 text-sm mt-2">This field is required</p>
        )}
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
          {...register("email", { required: true })}
          placeholder="Email"
          className={commonStyle}
        />
        {errors.email && (
          <p className="text-red-900 text-sm mt-2">This field is required</p>
        )}
      </div>

      <div>
        <label
          htmlFor="username"
          className="block text-sm text-black-500 font-bold dark:text-gray-300"
        >
          Designation
        </label>
        <input
          {...register("designation", { required: true })}
          type="text"
          placeholder="Designation
    "
          className={commonStyle}
        />
        {errors.designation && (
          <p className="text-red-900 text-sm mt-2">This field is required</p>
        )}
      </div>

      <div>
        <label
          htmlFor="username"
          className="block text-sm text-black-500 font-bold dark:text-gray-300"
        >
          Phone Number
        </label>
        <input
          {...register("Phone", { required: true })}
          type="text"
          placeholder="Phone Number
    "
          className={commonStyle}
        />
        {errors.Phone && (
          <p className="text-red-900 text-sm mt-2">This field is required</p>
        )}
      </div>
    </div>
  );
};

export default thirdStep;
