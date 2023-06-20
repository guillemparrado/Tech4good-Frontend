import { useWindowSize } from "@uidotdev/usehooks";
<<<<<<< HEAD

import Map from "./components/Map";
import Lista from "./components/Lista";
=======
 
import Mobile from "./components/mobile";
import Desktop from "./components/desktop";
>>>>>>> 86dcd994d2092c6ea71d0f19dbab0048a33a2191

function App() {
  const size = useWindowSize();
  return (
    <>
      {size.width > 768 && <Map />}
      {size.width <= 768 && (
        <>
          <Map />
          <div className="flex flex-col mt-2 place-items-center ">
            <Lista />
          </div>
        </>
      )}
    </>
  );
}

export default App;
