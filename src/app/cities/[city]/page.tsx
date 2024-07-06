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

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import Card from "@/components/Weather/Card";
import { updateWeatherList } from "@/utils/weather";
import { Weather } from "@/interfaces/Weather";
import { apiKey, weathersAtom } from "@/store/store";
import { ClipLoader } from "react-spinners";

interface Params {
  params: {
    city: string;
  };
}

export default function Home({ params }: Params) {
  const [weathers, setWeathers] = useAtom(weathersAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const weathersPerPage = 3;

  const getWeathers = async () => {
    try {
      const citiesResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${params.city}&appid=${apiKey}&units=metric&cnt=20`
      );

      const cities = await citiesResponse.json();

      if (cities && cities?.list?.length > 0) {
        const weathersPromises = cities.list.map((city: Weather) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey}&units=metric&cnt=20`
          ).then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch weather details");
            }
            return res.json();
          })
        );

        const weatherList: Weather[] = await Promise.all(weathersPromises);

        const newWeatherList = updateWeatherList(weatherList, weathers);
        setWeathers(newWeatherList);
        setLoading(false);
      } else {
        setLoading(false);
        setErrMsg("No cities found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeathers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.city]);

  // Function to handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Filtering and pagination logic
  const indexOfLastWeather = currentPage * weathersPerPage;
  const indexOfFirstWeather = indexOfLastWeather - weathersPerPage;
  const filteredWeathers =
    weathers.length > 0
      ? weathers.filter((weather) =>
          weather?.name?.toLowerCase().includes(params.city.toLowerCase())
        )
      : [];

  const currentWeathers = filteredWeathers.slice(
    indexOfFirstWeather,
    indexOfLastWeather
  );

  return (
    <section className="my-5">
      {!loading ? (
        !errMsg ? (
          currentWeathers.length > 0 &&
          currentWeathers.map((weather, index) => (
            <Card key={index} weatherData={weather} />
          ))
        ) : (
          <div className="bg-red-700 text-white text-2xl text-center p-5 ">
            <p>{errMsg}</p>
          </div>
        )
      ) : (
        <div className="w-full flex justify-center items-center p-5 m-5">
          <ClipLoader color="#3030ff" size={100} />
        </div>
      )}

      {/* Pagination controls */}
      <div className="mt-5 flex justify-center">
        {Array.from(
          { length: Math.ceil(filteredWeathers.length / weathersPerPage) },
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
