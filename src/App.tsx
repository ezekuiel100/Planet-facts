import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";

import { createContext, useEffect, useState } from "react";
import PlanetsPage from "./page/PlanetsPage";

export const PlanetContext = createContext();

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
          <Route path="/" element={<Navigate to="/mercury" replace />} />

          {planetsData.length > 0 &&
            planetsData.map((planet) => {
              return (
                <Route
                  key={planet.name}
                  path={`${planet.name.toLowerCase()}`}
                  element={
                    <PlanetContext.Provider
                      value={{
                        planet,
                        planetImages,
                        setPlanetImages,
                        setPlanetInfo,
                        planetInfo,
                      }}
                    >
                      <PlanetsPage />
                    </PlanetContext.Provider>
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
