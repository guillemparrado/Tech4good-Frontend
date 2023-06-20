import Lista from "./Lista";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "../App";

const Desktop = () => {
  return (
    <div className="layout flex overflow-auto">
<<<<<<< HEAD
      <div className="sidebar overflow-auto flex flex-col w-[250px] bg-black p-3 h-screen sticky top-0 gap-3 ">
        <Lista />
=======
      <div className="sidebar flex flex-col w-[250px] bg-black p-3 h-screen sticky top-0 gap-3 ">
        <h2 className="text-2xl text-gray-50 font-light mb-4 text-center">Barris</h2>
        {barrios.map((barrio, i) => {
          return (
            <div key={i} className="barrio text-gray-50 ">
              {barrio}
            </div>
          );
        })}
>>>>>>> 86dcd994d2092c6ea71d0f19dbab0048a33a2191
      </div>
      <div className="main w-full h-screen">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Desktop;
