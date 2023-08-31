"use client";

import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import Current from "./components/Current";
import Input from "./components/Input";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=5b0014324a6f41c6932180412233108&q=${location}&days=3&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Welcome to the Weather App</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <h2>{error}</h2>
        <p>Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div>
          <Current data={data} />
        </div>
      </>
    );
  }

  return (
    <main className="bg-cover bg-gradient-to-br h-screen from-blue-300 to-blue-500">
      <div className="bg-white/25 w-full flex flex-col h-fit">
        {/* INPUT AND LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input
            handleSearch={handleSearch}
            setLocation={setLocation}
          />
          <h1 className="mb-8 md:mb-0 order-1 md:order-2 text-white py-2 italic font-bold text-xl">
            Weather App<span className="text-yellow-300">.</span>
          </h1>
        </div>
        {content}
      </div>
    </main>
  );
}
