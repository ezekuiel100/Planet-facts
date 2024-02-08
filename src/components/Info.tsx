type infoProps = {
  number: string;
  text: string;
  onCurrentyPlanet: (planet: object) => void;
};

function Info({ number, text, onCurrentyPlanet }: infoProps) {
  return (
    <div
      className="flex gap-4 border border-[#38384f] text-[#838391] p-3 w-72 mb-4 cursor-pointer font-bold hover:bg-[#838391] hover:text-white"
      onClick={onCurrentyPlanet}
    >
      <span className="text-[#c1c1c8]">{number}</span>
      <p className=" ">{text}</p>
    </div>
  );
}

export default Info;
