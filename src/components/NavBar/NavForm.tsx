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
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  cityId: string;
};

const NavForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(`/city/${data.cityId}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <input
          {...register("cityId", { required: true })}
          type="search"
          placeholder={"City ID"}
          className="bg-custom-lightBlue px-4 text-custom-darkPurple placeholder:text-xl placeholder:text-custom-darkPurple focus:border-blue-500  outline-none w-full rounded-s-xl"
        />
        <button
          type="submit"
          className="bg-custom-mediumBlue rounded-e-xl p-1 cursor-pointer hover:bg-blue-500"
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#31255a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      {errors.cityId && (
        <span className="text-red-300 absolute">This field is required</span>
      )}
    </form>
  );
};

export default NavForm;
