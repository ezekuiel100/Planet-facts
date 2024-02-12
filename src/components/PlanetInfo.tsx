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

function PlanetInfo({ curentyImage, onImages, img }) {
  const [active, setActive] = useState("01");

  return (
    <div>
      <Info
        number={"01"}
        text={"OVERVIEW"}
        isActive={active}
        onActive={setActive}
        onImages={onImages}
        img={img}
      />
      <Info
        number={"02"}
        text={"INTERNAL STRUCTURE"}
        isActive={active}
        onActive={setActive}
        onImages={onImages}
        img={img}
      />
      <Info
        number={"03"}
        text={"SURFACE GEOLOGY"}
        isActive={active}
        onActive={setActive}
        onImages={onImages}
        img={img}
      />
    </div>
  );
}

export default PlanetInfo;
