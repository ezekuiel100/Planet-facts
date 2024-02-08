import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Mercury from "./page/Mercury.tsx";

function App() {
  return (
    <div className="bg-[#070724] bg-[url('images/background-stars.svg')]">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" Component={Mercury} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
