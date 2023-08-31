import { getCurrentDate } from "../ulits/currentDate";
import { AiOutlineEnvironment } from "react-icons/ai";

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      region: string;
      country: string;
    };
  };
}

export default function Current({ data }: CurrentProps) {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;
  return (
    <div className="flex flex-col mb-8 md:mb-0 gap-2 items-center">
      <h1 className="text-3xl text-white">Today is:</h1>
      <p className="text-white">{currentDate}</p>
      <div className="flex justify-between">
        <img
          className="w-24 object-cover"
          src={weatherIcon}
          alt={data.current.condition.text}
        />
        <div>
          <p className="text-white text-5xl">
            {data.current.temp_c.toFixed()}
            <span className="text-yellow-300">°</span>
          </p>
          <p className="text-white">{data.current.condition.text}</p>
        </div>
      </div>

      <div className="flex justify-between gap-x-5 text-black bg-white/90 px-2 py-2 rounded-xl mx-5">
        <AiOutlineEnvironment className="w-8 h-8" />
        <p>{data.location.name}</p>
        <p>{data.location.region}</p>
        <p>{data.location.country}</p>
      </div>
    </div>
  );
}
