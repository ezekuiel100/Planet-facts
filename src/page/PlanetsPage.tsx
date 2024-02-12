// import Main from "../components/Main";

import { useState } from "react";
import PlanetData from "../components/PlanetData";
import PlanetInfo from "../components/PlanetInfo";

function PlanetsPage({ planet }) {
  return (
    <main className="py-32">
      <div className="max-w-[70rem] grid grid-cols-3 mx-auto">
        <div className="col-span-2 m-auto w-full  ">
          <img src={planetImage} className="w-[50%] m-auto" />
        </div>

        <div>
          <h1 className="text-7xl uppercase font-antonio mb-6">
            {planet.name}
          </h1>

          <p className="mb-4 h-36">{planet.overview.content}</p>

          <p className="mb-10">
            Source : <a href="#">Wikipedia</a>
          </p>

          <PlanetInfo onImages={setImage} img={planet.images} />
        </div>
      </div>

      <PlanetData planet={planet} />
    </main>
  );
}

export default PlanetsPage;
