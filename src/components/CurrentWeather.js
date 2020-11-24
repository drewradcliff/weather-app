export default function CurrentWeather({ weather }) {
  const convertDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="text-white flex">
      <div className="text-8xl">{weather.current.temp_f}°</div>
      <div className="flex flex-col justify-end mx-2">
        <div className="text-5xl">{weather.location.name}</div>
        <div>{convertDate(weather.location.localtime)}</div>
      </div>
      <div className="flex flex-col justify-end mx-4">
        <img src={weather.current.condition.icon} alt="icon"></img>
        <div className="text-center">{weather.current.condition.text}</div>
      </div>
    </div>
  );
}
