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
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCompass,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleMinus,
  faCirclePlus,
  faCloud,
  faDroplet,
  faForwardFast,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faWeightHanging,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { Weather } from "@/interfaces/Weather";
import { convertTimestampToTime } from "@/utils/weather";
import { useAtom } from "jotai";
import { citiesVisitedAtom } from "@/store/store";

interface Props {
  weatherData: Weather;
}

const Card = ({ weatherData }: Props) => {
  const [citiesVisited, setCitiesVisited] = useAtom(citiesVisitedAtom);
  const [toggle, setToggle] = useState(false);
  const [units, setUnits] = useState("metric");
  const {
    name,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather,
    wind: { speed, deg },
    sys: { country, sunrise, sunset },
    clouds: { all: cloudiness },
    dt,
    timezone,
    id,
  } = weatherData;

  const sunriseTime = convertTimestampToTime(sunrise, timezone);
  const sunsetTime = convertTimestampToTime(sunset, timezone);
  const date = new Date(dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const weatherDescription = weather[0];

  const convertToImperial = (value: number, type: string) => {
    if (type === "temperature") return (value * 9) / 5 + 32;
    if (type === "speed") return value * 2.237;
    return value;
  };

  const displayTemp = (value: number) =>
    units === "metric" ? value : convertToImperial(value, "temperature");

  const displaySpeed = (value: number) =>
    units === "metric" ? value : convertToImperial(value, "speed");

  return (
    <>
      <div
        className={`relative flex justify-between items-center bg-cover m-auto h-64 w-3/5 p-5 rounded-lg  border-2 ${
          !toggle ? "shadow-lg" : "rounded-b-none border-b-0"
        } bg-custom-darkPurple text-white  border-custom-mediumBlue`}
        style={{
          backgroundImage: "url(/card.jpg)",
        }}
      >
        <div className="absolute text-white text-xl top-0 right-0 flex items-center text-center ">
          <div
            className={`${
              units === "imperial"
                ? "bg-blue-800"
                : "bg-blue-400 hover:bg-blue-600"
            } rounded-s-md w-10 cursor-pointer`}
            onClick={() => setUnits("imperial")}
          >
            °F
          </div>
          <div
            className={`${
              units === "metric"
                ? "bg-blue-800"
                : "bg-blue-400 hover:bg-blue-600"
            } rounded-tr-md w-10 cursor-pointer`}
            onClick={() => setUnits("metric")}
          >
            °C
          </div>
        </div>
        <div className="text-center w-1/5">
          <Image
            src={`http://openweathermap.org/img/wn/${weatherDescription.icon}.png`}
            alt={weatherDescription.description}
            className="mx-auto"
            width={100}
            height={100}
          />
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <span>
              <Image
                src={`http://openweathermap.org/images/flags/${country.toLowerCase()}.png`}
                alt={weatherDescription.description}
                width={30}
                height={30}
              />
            </span>
            {name}, {country}
          </h2>
          <h3 className="text-xl">{weatherDescription.main}</h3>
          <p className="italic">{weatherDescription.description}</p>
        </div>
        <div className="text-center w-3/5 flex flex-col gap-2">
          <p className="text-2xl font-bold text-orange-300">
            {displayTemp(temp).toFixed(1)} {units === "metric" ? "°C" : "°F"}
          </p>
          <p className="text-2xl">
            <FontAwesomeIcon icon={faCalendar} /> {date}
          </p>
          <p className="text-xl">
            Feels like{" "}
            <span className="font-bold">
              {displayTemp(feels_like).toFixed(1)}{" "}
              {units === "metric" ? "°C" : "°F"}
            </span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faTemperatureArrowDown}
              className="text-blue-300"
            />{" "}
            <span className="font-bold">
              {displayTemp(temp_min).toFixed(1)}{" "}
              {units === "metric" ? "°C" : "°F"}
            </span>{" "}
            /{" "}
            <FontAwesomeIcon
              icon={faTemperatureArrowUp}
              className="text-red-600"
            />{" "}
            <span className="font-bold">
              {displayTemp(temp_max).toFixed(1)}{" "}
              {units === "metric" ? "°C" : "°F"}
            </span>
          </p>
        </div>
        <div className="w-1/5 text-right flex flex-col items-center gap-2">
          {!toggle ? (
            <>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-5xl text-blue-300 hover:text-blue-600"
                onClick={() => {
                  setCitiesVisited((citiesVisited) => [
                    ...new Set([id, ...citiesVisited]),
                  ]);
                  setToggle(true);
                }}
              />
              <span className="text-sm">See more</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={faCircleMinus}
                className="text-5xl text-blue-300 hover:text-blue-600"
                onClick={() => setToggle(false)}
              />
              <span className="text-sm">See less</span>
            </>
          )}
        </div>
      </div>
      {toggle && (
        <div
          className="flex justify-center items-center bg-cover m-auto h-64 w-3/5 p-5 rounded-b-lg shadow-lg border-t-0 bg-custom-darkPurple text-white border-2 border-custom-mediumBlue"
          style={{
            backgroundImage: "url(/card.jpg)",
          }}
        >
          <div className="w-1/2 h-full p-5 text-xl">
            <div className="text-3xl text-center mb-5">
              <p>Weather details</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p>
                  <b>
                    <FontAwesomeIcon
                      icon={faWeightHanging}
                      className="text-gray-700"
                    />{" "}
                    Pressure:
                  </b>{" "}
                  <span>{pressure} hPa</span>
                </p>
                <p>
                  <b>
                    <FontAwesomeIcon
                      icon={faDroplet}
                      className="text-blue-400"
                    />{" "}
                    Humidity:
                  </b>{" "}
                  <span>{humidity}%</span>
                </p>
                <p>
                  <b>
                    <FontAwesomeIcon icon={faCloud} className="text-gray-500" />{" "}
                    Cloudiness:
                  </b>{" "}
                  <span>{cloudiness}%</span>
                </p>
              </div>
              <div>
                <p>
                  <b>
                    <FontAwesomeIcon icon={faWind} /> Wind:
                  </b>{" "}
                  <span>
                    {displaySpeed(speed).toFixed(1)}{" "}
                    {units === "metric" ? "m/s" : "mph"}
                  </span>
                </p>
                <p>
                  <b>
                    <FontAwesomeIcon
                      icon={faCompass}
                      className="text-red-600"
                    />{" "}
                    Wind Direction:
                  </b>{" "}
                  <span>{deg}°</span>
                </p>
                <p>
                  <b>
                    <FontAwesomeIcon
                      icon={faForwardFast}
                      className="text-yellow-400"
                    />{" "}
                    Wind Gust:
                  </b>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border h-full"></div>
          <div className="w-1/2 h-full p-5 text-2xl">
            <div className="text-3xl text-center mb-5">
              <p>Time details</p>
            </div>
            <div className="flex justify-between text-center">
              <div>
                <p>
                  <b>
                    <FontAwesomeIcon icon={faSun} className="text-orange-300" />{" "}
                    Sunrise starts at:
                  </b>
                  <p>{sunriseTime} hrs</p>
                </p>
              </div>
              <div>
                <p>
                  <b>
                    <FontAwesomeIcon icon={faMoon} className="text-gray-400" />{" "}
                    Sunset starts at:
                  </b>
                  <p>{sunsetTime} hrs</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
