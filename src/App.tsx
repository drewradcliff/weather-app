import React, { useState, useEffect } from "react"

import "./tailwind.output.css";
import { Weather } from "./components"
import { getCurrentWeather } from "./api/weather-api"

interface IWeather {
  conditionIcon: string;
  conditionText: string;
  temp: number;
  city: string;
  localTime: string;
}

export default function App() {
  const [weather, setWeather] = useState<IWeather | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const weather = await getCurrentWeather(`${position.coords.latitude},${position.coords.longitude}`)
      console.log(weather)
      setWeather({
        conditionIcon: weather.current.condition.icon,
        conditionText: weather.current.condition.text,
        temp: weather.current.temp_f,
        city: weather.location.name,
        localTime: weather.location.localtime,
      })
    });
  }, [])

  return (
    <div className="bg-gray-900 h-screen">
      <div className="py-10 px-16 h-full flex flex-col justify-between">
        <h1 className="text-white font-bold">weather.app</h1>
        <Weather />
      </div>
    </div>
  );
}