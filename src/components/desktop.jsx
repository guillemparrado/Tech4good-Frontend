import Map from "./Map";

const Desktop = ({ barrios }) => {
  return (
    <div className="layout flex overflow-auto">
      <div className="sidebar flex flex-col w-[250px] bg-black p-3 h-screen sticky top-0 gap-3 ">
        <h2 className="text-2xl text-gray-50 font-light mb-4 text-center">Barris</h2>
        {barrios.map((barrio, i) => {
          return (
            <div key={i} className="barrio text-gray-50 ">
              {barrio}
            </div>
          );
        })}
      </div>
      <div className="main w-full h-screen">
        <Map />
      </div>
    </div>
  );
};

export default Desktop;
