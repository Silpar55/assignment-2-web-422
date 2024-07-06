/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name:Alejandro Silva Juarez Student ID:142655224 Date: 4/7/2024
 *
 *
 ********************************************************************************/
"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  city: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(`/cities/${data.city}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-cover relative flex flex-col h-[450px] w-full text-center items-center justify-center gap-5 bg-center"
      style={{
        backgroundImage: "url(/hero.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg"></div>
      <div className="relative text-center flex flex-col gap-5">
        <label htmlFor="city" className="text-white text-3xl">
          Look for the weather of any city that you want!
        </label>
        <div className="flex w-full justify-center items-center">
          <input
            className="w-1/2 border p-3 text-white bg-transparent border-custom-light placeholder:text-white text-xl rounded-s-md"
            type="text"
            placeholder="City name, Country code"
            {...register("city", { required: true })}
          />
          <button
            type="submit"
            className="cursor-pointer font-semibold hover:text-blue-400 bg-transparent w-auto text-white p-3 text-xl border-custom-light border rounded-e-md"
          >
            Search city
          </button>
        </div>
        {errors.city && (
          <span className="text-red-200 text-2xl">This field is required</span>
        )}
      </div>
    </form>
  );
};

export default Form;
