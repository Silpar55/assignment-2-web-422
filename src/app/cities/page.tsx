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
import { useState } from "react";
import { useAtom } from "jotai";
import Card from "@/components/Weather/Card";
import { weathersAtom } from "@/store/store";

export default function Home() {
  const [weathers, setWeathers] = useAtom(weathersAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const weathersPerPage = 3;

  // Calculate pagination logic
  const indexOfLastWeather = currentPage * weathersPerPage;
  const indexOfFirstWeather = indexOfLastWeather - weathersPerPage;
  const currentWeathers = weathers.slice(
    indexOfFirstWeather,
    indexOfLastWeather
  );

  // Function to handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="my-5">
      {/* Card of your current weather */}
      {currentWeathers.length > 0 &&
        currentWeathers.map((weather, index) => (
          <Card key={index} weatherData={weather} />
        ))}

      {/* Pagination controls */}
      <div className="mt-5 flex justify-center">
        {Array.from(
          { length: Math.ceil(weathers.length / weathersPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
}
