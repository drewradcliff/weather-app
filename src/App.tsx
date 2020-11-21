import "./tailwind.output.css";
import { Weather } from "./components"

export default function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="py-10 px-16 h-full flex flex-col justify-between">
        <h1 className="text-white font-bold">weather.app</h1>
        <Weather />
      </div>
    </div>
  );
}