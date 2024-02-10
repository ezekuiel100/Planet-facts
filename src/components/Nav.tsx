import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className=" text-white font-bold flex justify-center flex-shrink-0">
      <div className="py-6 px-16 max-w-[100rem] flex w-full justify-between items-center border-b border-[#38384f] ">
        <p className="text-2xl font-antonio">THE PLANETS</p>
        <nav>
          <ul className="flex gap-8 text-gray-400 uppercase text-sm font-spartan">
            <li>
              <Link to="/"> Mercury </Link>
            </li>
            <li>
              <Link to="/venus"> Venus </Link>
            </li>
            <li>
              <Link to="/earth"> Earth </Link>
            </li>
            <li>
              <Link to="/mars"> Mars </Link>
            </li>
            <li>
              <Link to="/jupiter"> Jupiter</Link>
            </li>
            <li>
              <Link to="/saturn"> Saturn </Link>
            </li>
            <li>
              <Link to="/uranus"> Uranus </Link>
            </li>
            <li>
              <Link to="/neptune"> Neptune </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
