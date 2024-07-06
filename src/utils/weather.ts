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
import { Weather } from "@/interfaces/Weather";

// Function to convert Unix timestamp to human-readable format considering timezone offset
export function convertTimestampToTime(
  timestamp: number,
  timezoneOffset: number
) {
  const date = new Date((timestamp + timezoneOffset) * 1000); // Adjust timestamp with timezone offset
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function updateWeatherList(
  newWeather: Weather[],
  weathersList: Weather[]
) {
  const arrMap = new Map(newWeather.map((weather) => [weather.id, weather]));

  weathersList.forEach((weather) => {
    if (arrMap.has(weather.id)) {
      arrMap.set(weather.id, { ...arrMap.get(weather.id), ...weather });
    } else {
      arrMap.set(weather.id, weather);
    }
  });

  return Array.from(arrMap.values());
}
