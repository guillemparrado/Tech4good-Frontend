import { useWindowSize } from "@uidotdev/usehooks";

import { BrowserRouter } from "react-router-dom";
import Desktop from "./desktop";
import Mobile from "./mobile";



const Layout = () => {
  const size = useWindowSize();
  return (
    <BrowserRouter basename="/">
      {size.width > 768 && <Desktop />}
      {size.width <= 768 && <Mobile />}
    </BrowserRouter>
  );
};

export default Layout;
