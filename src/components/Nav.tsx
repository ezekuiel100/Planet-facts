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
              <Link to="/"> Venus </Link>
            </li>
            <li>
              <Link to="/"> Earth </Link>
            </li>
            <li>
              <Link to="/"> Mars </Link>
            </li>
            <li>
              <Link to="/"> Jupiter</Link>
            </li>
            <li>
              <Link to="/"> Saturn </Link>
            </li>
            <li>
              <Link to="/"> Uranus </Link>
            </li>
            <li>
              <Link to="/"> Neptune </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
