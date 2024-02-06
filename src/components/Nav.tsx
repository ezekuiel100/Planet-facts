function Nav() {
  return (
    <header className="bg-black text-white font-bold flex justify-center flex-shrink-0">
      <div className="py-6 px-16 max-w-[100rem] flex w-full justify-between  border-b border-gray-400 ">
        <p className="text-2xl ">THE PLANETS</p>
        <nav>
          <ul className="flex gap-8 text-gray-400">
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
