import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";

import { createContext, useEffect, useState } from "react";
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

type ContextType = {
  planet: Planet;
  planetImages: string | undefined;
  setPlanetImages: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPlanetInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
  planetInfo: string | undefined;
};

export const PlanetContext = createContext({} as ContextType);

function App() {
  const [planetsData, setPlanetsData] = useState<Planet[]>([]);
  const [planetImages, setPlanetImages] = useState<string | undefined>();
  const [planetInfo, setPlanetInfo] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("data.json");
        const res = await data.json();
        setLoading(false);
        setPlanetsData(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-4xl text-black">Loading....</div>;
  }

  return (
    <div className="bg-[#070724] bg-[url('images/background-stars.svg')]">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Navigate to="/mercury" replace />} />

          {planetsData.map((planet) => {
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
