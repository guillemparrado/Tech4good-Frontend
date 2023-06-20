import React, { useState } from 'react';

const Barrio = () => {
  const barrioDetail = {
    name: 'Nou Barris',
    alquiler: 250,
    actividad: 'feria de productos locales',
    centroComercial: 'Diagonal'
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="btn m-1"
        onClick={toggleDropdown}
      >
        Button
      </button>
      {dropdownOpen && (
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-8">
          <li><a>Actividades</a></li>
          <li><a>Actividad</a></li>
        </ul>
      )}
      <div className="w-4/5 p-6 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{barrioDetail.name}</h2>
        <p className="mb-4 text-lg">Centro Comercial: {barrioDetail.centroComercial}</p>
        <p className="mb-4 text-lg">Actividad: {barrioDetail.actividad}</p>
        <p className="mb-4 text-lg">Alquiler: {barrioDetail.alquiler}</p>
      </div>
    </div>
  );
};

export default Barrio;
