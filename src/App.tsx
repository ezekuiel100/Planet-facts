import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import { useEffect, useState } from "react";
import PlanetsPage from "./page/PlanetsPage";

export type Planet = {
  name: string;
  overview: { content: string; source: string };
  structure: { content: string; source: string };
  images: { geology: string; internal: string; planet: string };
  geology: { content: string; source: string };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
};

function App() {
  const [planetsData, setPlanetsData] = useState<Planet[]>([]);
  const [planetImages, setPlanetImages] = useState<string | undefined>();
  const [planetInfo, setPlanetInfo] = useState<string | undefined>();

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
