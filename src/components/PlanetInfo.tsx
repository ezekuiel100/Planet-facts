import { useContext, useEffect, useState } from "react";
import Info from "./Info";
import { Planet, PlanetContext } from "../App";

function PlanetInfo() {
  const [active, setActive] = useState("01");

  const { planet } = useContext(PlanetContext) as { planet: Planet };

  useEffect(() => {
    setActive("01"); // Redefinir o estado active para "01"
  }, [planet]);

  return (
    <div className="inline-block">
      <Info
        number={"01"}
        text={"OVERVIEW"}
        isActive={active}
        onActive={setActive}
      />
      <Info
        number={"02"}
        text={"INTERNAL STRUCTURE"}
        isActive={active}
        onActive={setActive}
      />
      <Info
        number={"03"}
        text={"SURFACE GEOLOGY"}
        isActive={active}
        onActive={setActive}
      />
    </div>
  );
}

export default PlanetInfo;
