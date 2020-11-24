import { SearchDetails } from ".";

export default function Details({ weather, forecast }) {
  const convertDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
    });
  };

  return (
    <div className="w-96 bg-gray-700 text-white p-12 z-10">
      <SearchDetails />
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
          {forecast.forecast.forecastday.map((item, index) => (
            <li className="flex justify-between" key={index}>
              <div className="py-5">{convertDate(item.date)}</div>
              <img src={item.day.condition.icon} alt="condition-icon"></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
