import React from "react";
import { useState } from "react";

const Lista = () => {
  const [disBar, setdisBar] = useState(false);
  const [barrio, setBarrio] = useState();
  const [district, setDistrict] = useState();

  const barrios = [
    "Trinitat Nova",
    "canyelles",
    "roquetes",
    "verdum",
    "baro de viver",
    "ciutat meridiana",
    "torre baro",
    "vallbona",
    "can peguera",
    "la guineueta",
    "carmel",
    "vilapicina",
    "porta",
    "turó de la peira",
    "canyelles",
    "les roquetes",
    "verdum",
    "la prosperitat",
    "la trinitat vella",
    "baro de viver",
    "ciutat meridiana",
    "torre baro",
    "vallbona",
    "can peguera",
    "la guineueta",
    "carmel",
    "vilapicina",
    "porta",
    "turó de la peira",
    "canyelles",
    "les roquetes",
    "verdum",
    "la prosperitat",
    "la trinitat vella",
    "baro de viver",
    "ciutat meridiana",
    "torre baro",
    "vallbona",
    "can peguera",
    "la guineueta",
    "carmel",
    "vilapicina",
    "porta",
    "turó de la peira",
    "canyelles",
    "les roquetes",
    "verdum",
    "la prosperitat",
    "la trinitat vella",
    "baro de viver",
    "ciutat meridiana",
    "torre baro",
    "vallbona",
    "can peguera",
    "la guineueta",
    "carmel",
    "vilapicina",
    "porta",
    "turó de la peira",
  ];
  const districts = [
    "nou barris",
    "sant andreu",
    "sant marti",
    "horta-guinardo",
    "gracia",
    "eixample",
    "sants-montjuic",
    "les corts",
    "sarria-sant gervasi",
    "ciutat vella",
  ];
  const handleDistricts = (district) => {
    setdisBar(!disBar);
    // setDistrict(district);
  };
  const handleBarrios = (barrio) => {
    // setBarrio(barrio);
  };

  return (
    <>
      {disBar && (
        <>
          <h2 className="text-xl font-bold mb-4">Barris</h2>
          <span
            onClick={() => setdisBar(!disBar)}
            className="hover:cursor-pointer"
          >
            ⬅️
          </span>
          {barrios.map((barrio, i) => {
            return (
              <span
                onClick={handleBarrios}
                key={i}
                className="barrio hover:cursor-pointer"
              >
                {barrio}
              </span>
            );
          })}
        </>
      )}
      {!disBar && (
        <>
          <h2 className="text-xl font-bold mb-4">Districtes</h2>
          {districts.map((barrio, i) => {
            return (
              <span
                onClick={handleDistricts}
                key={i}
                className="barrio hover:cursor-pointer"
              >
                {barrio}
              </span>
            );
          })}
        </>
      )}
    </>
  );
};

export default Lista;
