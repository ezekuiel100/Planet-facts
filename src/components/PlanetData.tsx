import { useContext } from "react";
import { PlanetContext } from "../App";

function PlanetData() {
  const { planet } = useContext(PlanetContext);

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-24 ">
      <div className="border p-6 border-[#38384f] text-4xl font-bold shrink-0  w-[18rem]">
        <span className="text-sm block mb-2 text-[#838391] uppercase">
          Rotation Time
        </span>
        {planet.rotation}
      </div>
      <div className="border p-6 border-[#38384f] text-4xl font-bold shrink-0 w-[18rem]">
        <span className="text-sm block mb-2 text-[#838391] uppercase">
          Revolution Time
        </span>
        {planet.revolution}
      </div>
      <div className="border p-6 border-[#38384f] text-4xl font-bold shrink-0 w-[18rem]">
        <span className="text-sm block mb-2 text-[#838391] uppercase">
          Radius
        </span>
        {planet.radius}
      </div>
      <div className="border p-6 border-[#38384f] text-4xl font-bold shrink-0 w-[18rem]">
        <span className="text-sm block mb-2 text-[#838391] uppercase">
          Average Temp.
        </span>
        {planet.temperature}
      </div>
    </div>
  );
}

export default PlanetData;
