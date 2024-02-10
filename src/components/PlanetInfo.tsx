import { useState } from "react";
import Info from "./Info";
import { Planet } from "./Main";

type PlanetProps = {
  onCurrentyPlanet: React.Dispatch<
    React.SetStateAction<{
      info: string;
      img: string;
    }>
  >;

  planet: Planet;
};

function PlanetInfo({ onCurrentyPlanet, planet }: PlanetProps) {
  const [active, setActive] = useState("01");

  return (
    <div>
      <Info
        number={"01"}
        text={"OVERVIEW"}
        isActive={active}
        onActive={setActive}
        onCurrentyPlanet={() => onCurrentyPlanet(planet.overview)}
      />
      <Info
        number={"02"}
        text={"INTERNAL STRUCTURE"}
        isActive={active}
        onActive={setActive}
        onCurrentyPlanet={() => onCurrentyPlanet(planet.internal)}
      />
      <Info
        number={"03"}
        text={"SURFACE GEOLOGY"}
        isActive={active}
        onActive={setActive}
        onCurrentyPlanet={() => onCurrentyPlanet(planet.surface)}
      />
    </div>
  );
}

export default PlanetInfo;
