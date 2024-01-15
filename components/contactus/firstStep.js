import React from "react";
import Inquire from "./assets/inquire";
import Service from "./assets/service";
import Business from "./assets/business";

const commonStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

const firstStep = ({ register, errors, isValid }) => {
  return (
    <React.Fragment>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <label
            htmlFor="inquire_about"
            className="block mb-2 text-sm font-bold text-black dark:text-white"
          >
            Which of our Legal Solutions do you want to inquire about?
          </label>
          <select
            name="inquire"
            {...register("inquire", { required: true })}
            id="inquire_about"
            className={commonStyle}
          >
            {Inquire.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            )
            )}
          </select>
          {errors.inquire && (
            <p className="text-red-900 text-sm mt-2">This field is required</p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block mb-2 text-sm font-bold text-black dark:text-white"
          >
            What Service do you want to avail?
          </label>
          <select
            name="service"
            {...register("service", { required: true })}
            id="service"
            className={commonStyle}
          >
            {Service.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            )
            )}

            {errors.service && (
              <p className="text-red-900 text-sm mt-2">
                This field is required
              </p>
            )}
          </select>
        </div>

        <div>
          <label
            htmlFor="areaOfBusiness"
            className="block mb-2 text-sm font-bold text-black dark:text-white"
          >
            What is your area of business?
          </label>
          <select
            name="areaofbusiness"
            {...register("areaofbusiness", { required: true })}
            id="areaOfBusiness"
            className={commonStyle}
          >
            {Business.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            )
            )}

            {errors.areaofbusiness && (
              <p className="text-red-900 text-sm mt-2">
                This field is required
              </p>
            )}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default firstStep;
