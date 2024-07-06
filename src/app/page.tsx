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
import { useEffect } from "react";
import { apiKey, currentWeatherAtom, weathersAtom } from "../store/store";
import { useAtom } from "jotai";
import Card from "@/components/Weather/Card";
import { updateWeatherList } from "@/utils/weather";

export default function Home() {
  const [weathers, setWeathers] = useAtom(weathersAtom);
  const [weather, setWeather] = useAtom(currentWeatherAtom);

  useEffect(() => {
    let units = "metric";

    // Get location through the navigator
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherByPosition);
    }

    async function getWeatherByPosition(position: {
      coords: { latitude: any; longitude: any };
    }) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
      ).then((res) => res.json());

      const newWeatherList = updateWeatherList([weather], weathers);
      if (weather?.cod !== 401) {
        setWeathers(newWeatherList);
        setWeather([weather]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-5">
      {/* Card of your current weather */}
      {weather && weather.length > 0 && <Card weatherData={weather[0]} />}
    </section>
  );
}
