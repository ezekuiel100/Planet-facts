import { useContext, useEffect, useState } from "react";
import Info from "./Info";
import { Planet, PlanetContext } from "../App";

// type PlanetInfoProps = {
//   setPlanetImages: React.Dispatch<React.SetStateAction<string | undefined>>;
//   planet: Planet;
//   setPlanetInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
// };

function PlanetInfo() {
  const [active, setActive] = useState("01");

  const { planet, setPlanetImages, setPlanetInfo } = useContext(PlanetContext);

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
