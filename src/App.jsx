<<<<<<< HEAD
import Barrio from "./view/Barrio";
import Card from "./components/card";

=======
import Map from "./components/Map";
>>>>>>> 87fc84fc52b8eb78fec69447ff2e22d43b4f01f2

function App() {
  const barrios = ["Trinitat Nova", "canyelles", "roquetes"];
  return (
<<<<<<< HEAD
    <>
     
      <Card/>
       <Barrio/>
    </>
=======
    <div className="layout flex">
      <div className="sidebar flex flex-col w-[250px] bg-black p-3 h-screen sticky top-0 gap-3">
        <h2 className="text-2xl font-bold">Barris</h2>
        {barrios.map((barrio, i) => {
          return (
            <div key={i} className="barrio">
              {barrio}
            </div>
          );
        })}
      </div>
      <div className="main w-full justify-center place-content-center ">
        <Map />
      </div>
    </div>
>>>>>>> 87fc84fc52b8eb78fec69447ff2e22d43b4f01f2
  );
}

export default App;
