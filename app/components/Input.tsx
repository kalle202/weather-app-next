"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { MdGpsFixed } from "react-icons/md";
import { getCurrentLocation } from "../ulits/currentLocation";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export default function input({ handleSearch, setLocation }: InputProps) {
  return (
    <form
      action=""
      className="flex items-center md:w-2/4 w-full md:order-1 order-2"
    >
      <input
        type="text"
        placeholder="Search for your city..."
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="text-white cursor-pointer">
        <AiOutlineSearch />
      </div>
      <button>
        <MdGpsFixed
          onClick={getCurrentLocation()}
          className="fill-white"
        />
      </button>
    </form>
  );
}
