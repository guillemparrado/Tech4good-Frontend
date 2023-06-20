import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";



const Layout = () => {
  const barrios = ["Trinitat Nova", "canyelles", "roquetes"];
  const size = useWindowSize();

  return (
    <>
      {size.width > 768 && <Desktop barrios={barrios} />}
      {size.width <= 768 && <Mobile barrios={barrios} />}
    </>
  );
};

export default Layout;
