import { useState, useEffect } from "react"
import "./tailwind.output.css";
import { CurrentWeather } from "./components";
import { getCurrentWeather } from "./api/weather-api";

export default function App() {
  const [weather, setWeather] = useState({
    location: {},
    current: {
      condition: {}
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const weather = await getCurrentWeather(
        `${position.coords.latitude},${position.coords.longitude}`
      );
      setWeather(weather);
    });
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <div className="pt-14 pb-20 px-20 h-full flex flex-col justify-between">
        <h1 className="text-white font-bold">weather.app</h1>
        <CurrentWeather weather={weather} />
      </div>
    </div>
  );
}
