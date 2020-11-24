import { useState, useEffect } from "react";
import "./tailwind.output.css";
import { CurrentWeather, Details } from "./components";
import { getCurrentWeather, getForecast } from "./api/weather-api";

export default function App() {
  const [weather, setWeather] = useState({
    location: {},
    current: {
      condition: {},
    },
  });
  const [forecast, setForecast] = useState({
    forecast: {
      forecastday: []
    }
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const weather = await getCurrentWeather(
        `${position.coords.latitude},${position.coords.longitude}`
      );
      setWeather(weather);

      const forecast = await getForecast(
        `${position.coords.latitude},${position.coords.longitude}`,
        7
      );
      setForecast(forecast);
    });
  }, []);

  return (
    <div className="bg-gray-900 flex justify-between">
      <Details weather={weather} forecast={forecast} />
      <div className="h-screen fixed w-full">
        <div className="pt-14 pb-20 px-20 h-full flex flex-col justify-between items-end">
          <h1 className="text-white font-bold">weather.app</h1>
          <CurrentWeather weather={weather} />
        </div>
      </div>
    </div>
  );
}
