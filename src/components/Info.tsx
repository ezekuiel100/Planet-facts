type infoProps = {
  number: string;
  text: string;
  isActive: string;
  onActive: (number: string) => void;
  onCurrentyPlanet: () => void;
};

function Info({ number, text, isActive, onActive, onImage, img }) {
  function handleClick() {
    onActive(number);
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
