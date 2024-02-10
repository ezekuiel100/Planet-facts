import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Mercury from "./page/Mercury.tsx";
import Venus from "./page/Venus.tsx";
import Earth from "./page/Earth.tsx";
import Mars from "./page/Mars.tsx";
import Jupiter from "./page/Jupiter.tsx";
import Saturn from "./page/Saturn.tsx";
import Uranus from "./page/Uranus.tsx";
import Neptune from "./page/Neptune.tsx";

function App() {
  return (
    <div className="bg-[#070724] bg-[url('images/background-stars.svg')]">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" Component={Mercury} />
          <Route path="/venus" Component={Venus} />
          <Route path="/earth" Component={Earth} />
          <Route path="/mars" Component={Mars} />
          <Route path="/jupiter" Component={Jupiter} />
          <Route path="/saturn" Component={Saturn} />
          <Route path="/uranus" Component={Uranus} />
          <Route path="/neptune" Component={Neptune} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
