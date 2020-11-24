import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchDetails() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <input
          className="bg-gray-700 border-b border-solid border-gray w-64"
          type="search"
          placeholder="Location"
          onKeyDown={handleSearch}
        ></input>
        <FiSearch />
      </div>
      <ul className="border-b border-solid border-gray py-6">
        <li className="py-3">New York</li>
        <li className="py-3">San Francisco</li>
        <li className="py-3">Chicago</li>
      </ul>
    </>
  );
}
