import React, { useState } from "react";

const Barrio = () => {
  const barrioDetail = {
    name: "Nou Barris",
    alquiler: 250,
    actividad: "feria de productos locales",
    centroComercial: "Diagonal",
  };
  const actividades = ["pescaderia", "carniceria", "fruteria", "panaderia"];

  return (
    <div className="flex flex-col gap-4 p-3">
      <details className="dropdown mb-32">
        <summary className="m-1 btn">Actividades</summary>
        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          {actividades.map((actividad, i) => (
            <li key={i}>
              <a>{actividad}</a>
            </li>
          ))}
        </ul>
      </details>
      <div className="w-full p-6 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg shadow-lg  text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{barrioDetail.name}</h2>
        <p className="mb-4 text-lg">
          Centro Comercial: {barrioDetail.centroComercial}
        </p>
        <p className="mb-4 text-lg">Actividad: {barrioDetail.actividad}</p>
        <p className="mb-4 text-lg">Alquiler: {barrioDetail.alquiler}</p>
      </div>
    </div>
  );
};

export default Barrio;
