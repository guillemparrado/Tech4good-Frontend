import { useWindowSize } from "@uidotdev/usehooks";

import Map from "./components/Map";
import Lista from "./components/Lista";

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
