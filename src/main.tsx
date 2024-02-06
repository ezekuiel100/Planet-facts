import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Global.css";
import Nav from "./components/Nav.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
