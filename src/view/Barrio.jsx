import React, { useState } from "react";

const Barrio = () => {
  const [select, setSelect] = useState();

  const barrioDetail = {
    name: "Nou Barris",
    alquiler: 250,
    rentabilidad: 0.05,
  };
  let habitantes = 1000;
  const actividades = ["pescaderias", "carnicerias", "fruterias", "panaderias"];

  return (
    <div className="flex flex-col gap-4 p-3">
      <details className="dropdown mb-32">
        <summary className="m-1 btn">Actividades</summary>
        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          {actividades.map((actividad, i) => (
            <li key={i}>
              <span onClick={(e) => setSelect(e.target.innerText)}>
                {actividad}
              </span>
            </li>
          ))}
        </ul>
      </details>
      <div className="w-full p-6 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg shadow-lg  text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{barrioDetail.name}</h2>

        <p className="mb-4 text-lg">Actividad principal: Hosteleria</p>
        <p className="mb-4 text-lg">Actividad más demandada: Panaderia</p>
        <p className="mb-4 text-lg">
          Precio medio alquiler: {barrioDetail.alquiler}$
        </p>
        {select && (
          <p className="mb-4 text-lg">
            Numero de {select} : 10 por cada {habitantes}
          </p>
        )}
        {select && (
          <p className="mb-4 text-lg">Rentabilidad del negocio: 0.5</p>
        )}
      </div>
    </div>
  );
};

export default Barrio;
