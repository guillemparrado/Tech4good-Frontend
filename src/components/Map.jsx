import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { PolygonF } from "@react-google-maps/api";
import { useState } from "react";
import { Marker } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import Card from "./Card";
import { useWindowSize } from "@uidotdev/usehooks";

const center = {
  lat: 41.4165590327245,
  lng: 2.169648119348686,
  zoom: 13,
};
const objetosBarcelona = [
  {
    id: 1,
    nombre: "Parque de la Ciutadella",
    lat: 41.388,
    lng: 2.1875,
  },
  {
    id: 2,
    nombre: "Mercado de Sant Antoni",
    lat: 41.3753,
    lng: 2.1607,
  },
  {
    id: 3,
    nombre: "Basílica de la Sagrada Familia",
    lat: 41.4036,
    lng: 2.1744,
  },
];
const paths = [
  { lat: 41.4016853455437, lng: 2.18692083199788 },
  { lat: 41.401687219089, lng: 2.18692083257044 },
  { lat: 41.4034823522052, lng: 2.18455238876171 },
  { lat: 41.4043366516419, lng: 2.18569464604173 },
  { lat: 41.4062819632309, lng: 2.18312788706355 },
  { lat: 41.4069244823097, lng: 2.18227746532831 },
  { lat: 41.4077871856492, lng: 2.18114163350041 },
  { lat: 41.4094802747297, lng: 2.17890518655161 },
  { lat: 41.4120671356868, lng: 2.17549317172577 },
  { lat: 41.4069597007914, lng: 2.1686848031696 },
  { lat: 41.4044002537687, lng: 2.17206842623794 },
  { lat: 41.4008861166762, lng: 2.16737906041993 },
  { lat: 41.4017404354242, lng: 2.16624372422234 },
  { lat: 41.3964913414814, lng: 2.15925215991291 },
  { lat: 41.392885757456, lng: 2.14500422865247 },
  { lat: 41.3928337555519, lng: 2.14502091442922 },
  { lat: 41.3927853137828, lng: 2.14502819971373 },
  { lat: 41.3927370307604, lng: 2.14502775584665 },
  { lat: 41.3926813883422, lng: 2.14501635609253 },
  { lat: 41.3926277690233, lng: 2.1449935665429 },
  { lat: 41.3925844317278, lng: 2.14496533144894 },
  { lat: 41.3925318417537, lng: 2.14491621350243 },
  { lat: 41.392488953364, lng: 2.14486111939158 },
  { lat: 41.3924615985029, lng: 2.14481515161164 },
  { lat: 41.3924337501397, lng: 2.14475368844486 },
  { lat: 41.3924122543246, lng: 2.14468284810431 },
  { lat: 41.3923989293389, lng: 2.14460852760093 },
  { lat: 41.3923942787001, lng: 2.14454514567198 },
  { lat: 41.3923960833853, lng: 2.14447773187519 },
  { lat: 41.3924026060455, lng: 2.14442702599785 },
  { lat: 41.3924147950686, lng: 2.14437036083134 },
  { lat: 41.3915022187666, lng: 2.14398412801656 },
  { lat: 41.3910578795375, lng: 2.1438274776576 },
  { lat: 41.3905313261579, lng: 2.14367523342537 },
  { lat: 41.3900741813872, lng: 2.14355535583093 },
  { lat: 41.3887493062299, lng: 2.14322364768759 },
  { lat: 41.3877083344731, lng: 2.14296567992314 },
  { lat: 41.3866342625544, lng: 2.14277701020226 },
  { lat: 41.3856480738535, lng: 2.14266789855658 },
  { lat: 41.3807483993951, lng: 2.14232885714109 },
  { lat: 41.3762631721116, lng: 2.14826218931016 },
  { lat: 41.3757986743807, lng: 2.14898384510396 },
  { lat: 41.3755971405215, lng: 2.1492528660354 },
  { lat: 41.3753690217937, lng: 2.14955313161819 },
  { lat: 41.3751054454269, lng: 2.14992485240582 },
  { lat: 41.3750661245928, lng: 2.15101517098272 },
  { lat: 41.375033600331, lng: 2.15405106308411 },
  { lat: 41.3750397122233, lng: 2.15626378047132 },
  { lat: 41.3750335055203, lng: 2.15772563731237 },
  { lat: 41.3750072188417, lng: 2.16782268565759 },
  { lat: 41.3751984648523, lng: 2.16781395807005 },
  { lat: 41.3759450807174, lng: 2.16680413968361 },
  { lat: 41.3787779892825, lng: 2.16311459369197 },
  { lat: 41.3854294289284, lng: 2.16403651541555 },
  { lat: 41.3859611263672, lng: 2.16473952857229 },
  { lat: 41.3855706674316, lng: 2.16938402319946 },
  { lat: 41.3856046339082, lng: 2.16979458764205 },
  { lat: 41.3856974885078, lng: 2.1699889543436 },
  { lat: 41.3857965514922, lng: 2.17015870047301 },
  { lat: 41.3859095052364, lng: 2.17030992366122 },
  { lat: 41.3868731567988, lng: 2.17116369638581 },
  { lat: 41.3870750270933, lng: 2.17153585090275 },
  { lat: 41.3885051858415, lng: 2.17279100000021 },
  { lat: 41.3889793129505, lng: 2.17343446886326 },
  { lat: 41.3889799123814, lng: 2.1758764089094 },
  { lat: 41.3901948620381, lng: 2.17751564604913 },
  { lat: 41.3910831497548, lng: 2.17988470936584 },
  { lat: 41.3922531732466, lng: 2.18134880571104 },
  { lat: 41.3914510879207, lng: 2.18240645194887 },
  { lat: 41.3946703935473, lng: 2.18675710789902 },
  { lat: 41.39469100158, lng: 2.18673276003348 },
  { lat: 41.3947214285669, lng: 2.18670726104587 },
  { lat: 41.3947548840399, lng: 2.18668969082779 },
  { lat: 41.3947902102904, lng: 2.18668064994789 },
  { lat: 41.3948261846173, lng: 2.18668046466745 },
  { lat: 41.3948615639373, lng: 2.1866891265731 },
  { lat: 41.3948951211493, lng: 2.18670633996813 },
  { lat: 41.3949256990899, lng: 2.18673150923581 },
  { lat: 41.3949522378077, lng: 2.18676377438302 },
  { lat: 41.3949738195126, lng: 2.18680199851693 },
  { lat: 41.3949896873506, lng: 2.1868448752671 },
  { lat: 41.3949993082826, lng: 2.18689090407881 },
  { lat: 41.4016853455437, lng: 2.18692083199788 },
];

const options = {
  fillColor: "lightblue",
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 1,
  clickable: true,
  draggable: false,
  editable: false,
  geodesic: true,
  zIndex: 1,
  name: "Polygon 1",
};

function Map() {
  const [coords, setCoords] = useState(center);
  const [distrito, setDistrito] = useState();
  const [card, setCard] = useState(false);

  const size = useWindowSize();

  const containerStyle = {
    height: size.width < 768 ? "50vh" : "100vh",
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
  };

  let eixample = {
    id: 1,
    name: "Eixample",
    lat: 41.392216663357125,
    lng: 2.1668304865538386,
  };

  const goToBarrio = (barrio) => {
    setCoords({ lat: barrio.lat, lng: barrio.lng, zoom: 14 });
    setDistrito(barrio);
  };

  const showCard = (distrito, e) => {
    console.log(e);
    setCard(true);
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: coords.lat, lng: coords.lng }}
        zoom={coords.zoom}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <PolygonF
          paths={paths}
          options={options}
          onClick={() => goToBarrio(eixample)}
        />
        {distrito && (
          <>
            {objetosBarcelona.map((barrio) => (
              <MarkerF
                key={barrio.id}
                position={{ lat: barrio.lat, lng: barrio.lng }}
                onClick={(e) => showCard(barrio, e)}
              />
            ))}
          </>
        )}
        {card && <Card distrito={distrito} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
