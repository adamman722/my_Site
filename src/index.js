import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./Pages/About";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Board from "./components/ChessTest/Board";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route StrictMode path="/App" element={<App />} />
        <Route StrictMode path="/About" element={<About />} />
        <Route StrictMode path="/Projects" element={<Projects />} />
        <Route StrictMode path="/Login" element={<Login bool={true} />} />
        <Route StrictMode path="/Register" element={<Login bool={false} />} />
        <Route StrictMode path="/LandingPage" element={<LandingPage />} />
        <Route
          StrictMode
          path="/ChessBoard"
          element={<Board knightPosition={[0, 0]} />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
