import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import { useEffect, useState } from "react";
import PlanetsPage from "./page/PlanetsPage";

function App() {
  const [planetsData, setPlanetsData] = useState([]);
  const [planetImages, setPlanetImages] = useState();
  const [planetInfo, setPlanetInfo] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("data.json");
      const res = await data.json();
      setPlanetsData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-[#070724] bg-[url('images/background-stars.svg')]">
      <BrowserRouter>
        <Nav />
        <Routes>
          {planetsData.length > 0 && (
            <Route
              path="/"
              element={
                <PlanetsPage
                  planet={planetsData[0]}
                  planetImages={planetsData[0].images.planet}
                  setPlanetImages={setPlanetImages}
                  setPlanetInfo={setPlanetInfo}
                  planetInfo={planetInfo}
                />
              }
            />
          )}
          {planetsData.length > 0 &&
            planetsData.map((planet) => {
              return (
                <Route
                  key={planet.name}
                  path={`/${planet.name.toLowerCase()}`}
                  element={
                    <PlanetsPage
                      planet={planet}
                      planetImages={planetImages}
                      setPlanetImages={setPlanetImages}
                      setPlanetInfo={setPlanetInfo}
                      planetInfo={planetInfo}
                    />
                  }
                />
              );
            })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
