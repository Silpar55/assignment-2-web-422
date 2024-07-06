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
import { citiesVisitedAtom } from "@/store/store";
import { useAtom } from "jotai";
import Link from "next/link";
import { useState } from "react";

const NavDropDown = () => {
  const [citiesVisited, setCitiesVisited] = useAtom(citiesVisitedAtom);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-custom-lightBlue  hover:bg-custom-mediumPurple hover:text-white px-3 py-2 rounded-md text-xl font-medium"
      >
        <div className="flex gap-5">
          Previously Viewed
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#0056d6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                fill="#00a3d7"
              ></path>
            </g>
          </svg>
        </div>
      </button>
      {isDropdownOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          {citiesVisited.map((id, i) => {
            if (i < 5)
              return (
                <Link
                  key={id}
                  href={`/city/${id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      width="30px"
                      height="30px"
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
                          d="M7 9H7.01M7 13H7.01M7 17H7.01M15 7H15.01M15 11H15.01M15 15H15.01M18 14H18.01M18 18H18.01M9 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H9M12 4.6V19.4C12 19.9601 12 20.2401 12.109 20.454C12.2049 20.6422 12.3578 20.7951 12.546 20.891C12.7599 21 13.0399 21 13.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V11.5C21 11.0341 21 10.8011 20.9239 10.6173C20.8224 10.3723 20.6277 10.1776 20.3827 10.0761C20.1989 10 19.9659 10 19.5 10C19.0341 10 18.8011 10 18.6173 9.92388C18.3723 9.82239 18.1776 9.62771 18.0761 9.38268C18 9.19891 18 8.96594 18 8.5V4.6C18 4.03995 18 3.75992 17.891 3.54601C17.7951 3.35785 17.6422 3.20487 17.454 3.10899C17.2401 3 16.9601 3 16.4 3H13.6C13.0399 3 12.7599 3 12.546 3.10899C12.3578 3.20487 12.2049 3.35785 12.109 3.54601C12 3.75992 12 4.03995 12 4.6Z"
                          stroke="#0056d6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    City {id}
                  </div>
                </Link>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
