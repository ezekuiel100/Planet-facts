function Nav() {
  return (
    <header className=" text-white font-bold flex justify-center flex-shrink-0">
      <div className="py-6 px-16 max-w-[100rem] flex w-full justify-between items-center border-b border-[#38384f] ">
        <p className="text-2xl font-antonio">THE PLANETS</p>
        <nav>
          <ul className="flex gap-8 text-gray-400 uppercase text-sm font-spartan">
            <li>
              <a href="#"> Mercury </a>
            </li>
            <li>
              <a href="#"> Venus </a>
            </li>
            <li>
              <a href="#"> Earth </a>
            </li>
            <li>
              <a href="#"> Mars </a>
            </li>
            <li>
              <a href="#"> Jupiter</a>
            </li>
            <li>
              <a href="#"> Saturn </a>
            </li>
            <li>
              <a href="#"> Uranus </a>
            </li>
            <li>
              <a href="#"> Neptune </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
