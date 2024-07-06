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
import { atom } from "jotai";

export const currentWeatherAtom = atom<Weather[]>([]);
export const weathersAtom = atom<Weather[]>([]);
export const citiesVisitedAtom = atom<number[]>([]);
export const apiKey = "b7497690c2fc5173a9e22c35293711b8";
