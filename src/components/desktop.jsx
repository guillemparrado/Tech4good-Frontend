import Lista from "./Lista";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "../App";
import Barrio from "../view/Barrio";

const Desktop = () => {
  return (
    <div className="layout flex overflow-auto">
      <div className="sidebar overflow-auto flex flex-col w-[250px] bg-black p-3 h-screen sticky top-0 gap-3 ">
        <Lista />
      </div>
      <div className="main w-full h-screen">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/barrio/:id" element={<Barrio />} />
        </Routes>
      </div>
    </div>
  );
};

export default Desktop;
