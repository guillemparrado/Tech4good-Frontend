import React from "react";
import { useState } from "react";

const Lista = () => {
  const [disBar, setdisBar] = useState(false);

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
  return (
    <>
      {disBar && (
        <>
          <h2 className="text-xl font-bold mb-4">Barris</h2>
          {barrios.map((barrio, i) => {
            return (
              <div key={i} className="barrio">
                {barrio}
              </div>
            );
          })}
        </>
      )}
      {!disBar && (
        <>
          <h2 className="text-xl font-bold mb-4">Districtes</h2>
          {districts.map((barrio, i) => {
            return (
              <div key={i} className="barrio">
                {barrio}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Lista;
