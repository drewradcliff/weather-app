export default function CurrentWeather({ weather }) {
  return (
    <div className="text-white flex">
      <div className="text-8xl">{weather.current.temp_f}°</div>
      <div className="flex flex-col justify-end mx-2">
        <div className="text-5xl">{weather.location.name}</div>
        <div>{weather.location.localtime}</div>
      </div>
      <div className="flex flex-col justify-end mx-4">
        <img src={weather.current.condition.icon}></img>
        <div className="text-center">{weather.current.condition.text}</div>
      </div>
    </div>
  );
}
