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
import { apiKey, weathersAtom } from "@/store/store";
import { ClipLoader } from "react-spinners";

interface Params {
  params: {
    id: string;
  };
}

export default function Home({ params }: Params) {
  const [weathers, setWeathers] = useAtom(weathersAtom);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const getWeathers = async () => {
    const weatherById = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${params.id}&appid=${apiKey}&units=metric&cnt=20`
    ).then((res) => {
      if (res.status === 404) {
        setLoading(false);
        setErrMsg("No city found");
      }
      if (res.status === 400) {
        setLoading(false);
        setErrMsg("Error at finding a city ");
      }
      return res.json();
    });

    const newWeatherList = updateWeatherList([weatherById], weathers);
    setWeathers(newWeatherList);
    setLoading(false);
  };

  useEffect(() => {
    getWeathers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <section className="my-5">
      {!loading ? (
        !errMsg ? (
          weathers.length > 0 &&
          weathers.map((weather, index) => {
            if (weather.id === +params.id)
              return <Card weatherData={weather} key={index} />;
          })
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
    </section>
  );
}
