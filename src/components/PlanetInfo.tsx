import { useEffect, useState } from "react";
import Info from "./Info";

// type PlanetProps = {
//   onCurrentyPlanet: React.Dispatch<
//     React.SetStateAction<{
//       info: string;
//       img: string;
//     }>
//   >;

//   planet: Planet;
// };

function PlanetInfo({ setPlanetImages, planet, setPlanetInfo }: {}) {
  const [active, setActive] = useState("01");

  useEffect(() => {
    setActive("01"); // Redefinir o estado active para "01"
  }, [planet]);

  return (
    <div>
      <Info
        number={"01"}
        text={"OVERVIEW"}
        isActive={active}
        onActive={setActive}
        setPlanetImages={setPlanetImages}
        planet={planet}
        setPlanetInfo={setPlanetInfo}
      />
      <Info
        number={"02"}
        text={"INTERNAL STRUCTURE"}
        isActive={active}
        onActive={setActive}
        setPlanetImages={setPlanetImages}
        planet={planet}
        setPlanetInfo={setPlanetInfo}
      />
      <Info
        number={"03"}
        text={"SURFACE GEOLOGY"}
        isActive={active}
        onActive={setActive}
        setPlanetImages={setPlanetImages}
        planet={planet}
        setPlanetInfo={setPlanetInfo}
      />
    </div>
  );
}

export default PlanetInfo;
