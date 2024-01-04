import React from "react";
import Inquire from "./assets/inquire";
import Service from "./assets/service";
import { v4 as uuidv4 } from "uuid";
import Business from "./assets/business";

const commonStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

const firstStep = ({ register, errors, isValid }) => {
  return (
    <React.Fragment>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <label
            htmlFor="countries_multiple"
            className="block mb-2 text-sm font-bold text-black dark:text-white"
          >
            Which of our Legal Solutions do you want to inquire about?
          </label>
          <select
            name="inquire"
            {...register("inquire", { required: true })}
            multiple=""
            id="countries_multiple"
            className={commonStyle}
            defaultValue={"Choose One"}
          >
            {/* <option selected="">Choose countries</option> */}
            {Inquire.map((item, index) => {
              return (
                <option key={uuidv4()} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {errors.inquire && (
            <p className="text-red-900 text-sm mt-2">This field is required</p>
          )}
        </div>

        <div>
          <label
            htmlFor="countries_multiple"
            className="block mb-2 text-sm font-bold text-black dark:text-white"
          >
            What Service do you want to avail?
          </label>
          <select
            name="service"
            {...register("service", { required: true })}
            defaultValue={"Choose One"}
            multiple=""
            id="countries_multiple"
            className={commonStyle}
          >
            {Service.map((item, index) => {
              return (
                <option key={uuidv4()} value={item.value}>
                  {item.name}
                </option>
              );
            })}

            {errors.service && (
              <p className="text-red-900 text-sm mt-2">
                This field is required
              </p>
            )}
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
            name="areaofbusiness"
            multiple=""
            defaultValue={"Choose One"}
            {...register("areaofbusiness", { required: true })}
            id="countries_multiple"
            className={commonStyle}
          >
            {Business.map((item, index) => {
              return (
                <option key={uuidv4()} value={item.value}>
                  {item.name}
                </option>
              );
            })}

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
