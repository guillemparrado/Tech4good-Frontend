import { useWindowSize } from "@uidotdev/usehooks";
 
import Mobile from "./components/mobile";
import Desktop from "./components/desktop";

function App() {
  const barrios = ["Trinitat Nova", "canyelles", "roquetes"];
  const size = useWindowSize();

  return (
    <>
      {size.width > 768 && <Desktop barrios={barrios} />}
      {size.width <= 768 && <Mobile barrios={barrios} />}
    </>
  );
}

export default App;
