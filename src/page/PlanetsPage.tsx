import { useContext, useEffect } from "react";
import PlanetData from "../components/PlanetData";
import PlanetInfo from "../components/PlanetInfo";
import { Planet, PlanetContext } from "../App";

type PlanetContextType = {
  planet: Planet;
  planetImages: string | undefined;
  setPlanetImages: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPlanetInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
  planetInfo: string | undefined;
};

function PlanetsPage() {
  const { planet, planetImages, setPlanetImages, setPlanetInfo, planetInfo } =
    useContext(PlanetContext) as PlanetContextType;

  useEffect(() => {
    setPlanetImages(planet.images.planet);
    setPlanetInfo(planet.overview.content);
  }, [planet, setPlanetImages, setPlanetInfo]);

  return (
    <main className="py-32">
      <div className="max-w-[70rem] p-4 grid gap-y-10 mx-auto lg:grid-cols-3 ">
        <div className="col-span-2 m-auto w-full  ">
          <img src={planetImages} className="w-[50%] m-auto" />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-7xl uppercase font-antonio mb-6">
            {planet.name}
          </h1>

          <p className="mb-4 h-36">{planetInfo}</p>

          <p className="mb-10 text-[#838391]">
            Source :{" "}
            <a
              href={planet.overview.source}
              target="_blank"
              className="font-bold underline"
            >
              Wikipedia
            </a>
          </p>

          <PlanetInfo />
        </div>
      </div>

      <PlanetData />
    </main>
  );
}

export default PlanetsPage;
