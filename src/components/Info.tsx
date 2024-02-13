import { useContext } from "react";
import { Planet, PlanetContext } from "../App";

type infoProps = {
  number: string;
  text: string;
  isActive: string;
  onActive: React.Dispatch<React.SetStateAction<string>>;
};

type infoContext = {
  planet: Planet;
  setPlanetImages: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPlanetInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
};

function Info({ number, text, isActive, onActive }: infoProps) {
  const { planet, setPlanetImages, setPlanetInfo } = useContext(
    PlanetContext
  ) as infoContext;

  function handleClick() {
    onActive(number);

    if (number === "01") {
      setPlanetImages(planet.images.planet);
      setPlanetInfo(planet.overview.content);
    } else if (number === "02") {
      setPlanetImages(planet.images.internal);
      setPlanetInfo(planet.structure.content);
    } else if (number === "03") {
      setPlanetImages(planet.images.geology);
      setPlanetInfo(planet.geology.content);
    }
  }

  return (
    <div
      className={`${
        isActive === number ? "bg-[#419ebb] text-white" : ""
      } flex gap-4 border border-[#38384f] text-[#838391] p-3 w-72 mb-4 cursor-pointer font-bold hover:bg-[#838391] hover:text-white`}
      onClick={handleClick}
    >
      <span className="text-[#c1c1c8]">{number}</span>
      <p className=" ">{text}</p>
    </div>
  );
}

export default Info;
