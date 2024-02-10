import { useState } from "react";
import PlanetInfo from "./PlanetInfo";
import PlanetData from "./PlanetData";

export type Planet = {
  name: string;
  overview: {
    info: string;
    img: string;
  };

  internal: {
    info: string;
    img: string;
  };

  surface: {
    info: string;
    img: string;
  };
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  averageTemperature: string;
};

function Main({ planet }: { planet: Planet }) {
  const [currentyPlanet, setCurrentyPlanet] = useState(planet.overview);

  return (
    <main className="py-32">
      <div className="max-w-[70rem] grid grid-cols-3 mx-auto">
        <div className="col-span-2 m-auto w-full  ">
          <img src={currentyPlanet.img} className="w-[50%] m-auto" />
        </div>

        <div>
          <h1 className="text-7xl uppercase font-antonio mb-6">
            {planet.name}
          </h1>

          <p className="mb-4 h-36">{currentyPlanet.info}</p>

          <p className="mb-10">
            Source : <a href="#">Wikipedia</a>
          </p>

          <PlanetInfo onCurrentyPlanet={setCurrentyPlanet} planet={planet} />
        </div>
      </div>

      <PlanetData planet={planet} />
    </main>
  );
}

export default Main;
