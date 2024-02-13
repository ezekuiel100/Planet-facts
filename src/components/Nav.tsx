import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className=" text-white font-bold flex justify-center ">
      <div className="flex flex-col py-6 px-2 max-w-[100rem] w-full  items-center border-b border-[#38384f] lg:flex-row gap-4 justify-between">
        <Link to={"/"}>
          <p className="text-2xl font-antonio">THE PLANETS</p>
        </Link>
        <nav>
          <ul className="flex gap-8 flex-wrap text-gray-400 uppercase text-sm font-spartan ">
            <li className="hover:text-white">
              <Link to="/mercury"> Mercury </Link>
            </li>
            <li className="hover:text-white">
              <Link to="/venus"> Venus </Link>
            </li>
            <li className="hover:text-white">
              <Link to="/earth"> Earth </Link>
            </li>
            <li className="hover:text-white">
              <Link to="/mars"> Mars </Link>
            </li>
            <li className="hover:text-white">
              <Link to="/jupiter"> Jupiter</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/saturn"> Saturn </Link>
            </li>
            <li className="hover:text-white">
              <Link to="/uranus"> Uranus </Link>
            </li>
            <li className="hover:text-white">
              <Link to="/neptune"> Neptune </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
