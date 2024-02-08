import { useState } from "react";
import Info from "./Info";

export type Planet = {
  planet: {
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
  };
};

function Main({ planet }: Planet) {
  const [currentyPlanet, setCurrentyPlanet] = useState(planet.overview);
  const [active, setActive] = useState("01");

  return (
    <main className="flex justify-center items-center py-32">
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

          <Info
            number={"01"}
            text={"OVERVIEW"}
            isActive={active}
            onActive={setActive}
            onCurrentyPlanet={() => setCurrentyPlanet(planet.overview)}
          />
          <Info
            number={"02"}
            text={"INTERNAL STRUCTURE"}
            isActive={active}
            onActive={setActive}
            onCurrentyPlanet={() => setCurrentyPlanet(planet.internal)}
          />
          <Info
            number={"03"}
            text={"SURFACE GEOLOGY"}
            isActive={active}
            onActive={setActive}
            onCurrentyPlanet={() => setCurrentyPlanet(planet.surface)}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
