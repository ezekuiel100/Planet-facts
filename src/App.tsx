import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import { useEffect, useState } from "react";
import PlanetsPage from "./page/PlanetsPage";

function App() {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    async function teste() {
      const data = await fetch("data.json");
      const res = await data.json();
      setPlanetsData(res);
    }
    teste();
  }, []);

  return (
    <div className="bg-[#070724] bg-[url('images/background-stars.svg')]">
      <BrowserRouter>
        <Nav />
        <Routes>
          {planetsData.length > 0 &&
            planetsData.map((planet) => {
              return (
                <Route
                  key={planet.name}
                  path={`/${planet.name.toLowerCase()}`}
                  element={<PlanetsPage planet={planet} />}
                />
              );
            })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
