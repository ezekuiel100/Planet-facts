import { useEffect } from "react";
import PlanetData from "../components/PlanetData";
import PlanetInfo from "../components/PlanetInfo";
import { Planet } from "../App";

type PlanetProps = {
  planet: Planet;
  planetImages: string | undefined;
  setPlanetImages: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPlanetInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
  planetInfo: string | undefined;
};

function PlanetsPage({
  planet,
  planetImages,
  setPlanetImages,
  setPlanetInfo,
  planetInfo,
}: PlanetProps) {
  useEffect(() => {
    setPlanetImages(planet.images.planet);
    setPlanetInfo(planet.overview.content);
  }, [planet, setPlanetImages, setPlanetInfo]);

  return (
    <main className="py-32">
      <div className="max-w-[70rem] grid grid-cols-3 mx-auto">
        <div className="col-span-2 m-auto w-full  ">
          <img src={planetImages} className="w-[50%] m-auto" />
        </div>

        <div>
          <h1 className="text-7xl uppercase font-antonio mb-6">
            {planet.name}
          </h1>

          <p className="mb-4 h-36">{planetInfo}</p>

          <p className="mb-10">
            Source : <a href="#">Wikipedia</a>
          </p>

          <PlanetInfo
            setPlanetImages={setPlanetImages}
            planet={planet}
            setPlanetInfo={setPlanetInfo}
          />
        </div>
      </div>

      <PlanetData planet={planet} />
    </main>
  );
}

export default PlanetsPage;
