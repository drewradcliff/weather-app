import { FiSearch } from "react-icons/fi";

export default function Details({ weather, forecast }) {
  return (
    <div className="w-96 bg-gray-700 text-white p-12 z-10">
      <div className="flex justify-between">
        <input
          className="bg-gray-700 border-b border-solid border-gray w-64"
          placeholder="Location"
        ></input>
        <FiSearch />
      </div>
      <ul className="border-b border-solid border-gray py-6">
        <li className="py-3">New York</li>
        <li className="py-3">San Francisco</li>
        <li className="py-3">Chicago</li>
      </ul>
      <div className="py-9">
        <h1 className="font-bold">Weather Details</h1>
        <ul className="border-b border-solid border-gray py-6">
          <li className="flex justify-between py-3">
            <div>Cloud cover</div>
            <div>{weather.current.cloud}%</div>
          </li>
          <li className="flex justify-between py-3">
            <div>Humidity</div>
            <div>{weather.current.humidity}%</div>
          </li>
          <li className="flex justify-between py-3">
            <div>Wind</div>
            <div>{weather.current.wind_mph}mph</div>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold">Next Days</h1>
        <ul className="py-6">
          {forecast.forecast.forecastday.map((item) => (
            <li className="flex justify-between">
              <div className="py-5">{item.date}</div>
              <img src={item.day.condition.icon}></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
