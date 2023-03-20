import { createContext, useEffect, useState } from "react";
import BreadcrumData from "../Typings/Breadcrums/breadcrums";
import { useLocation } from "react-router-dom";

export const BreadcrumDataContext = createContext({
  path: [],
});

const BreadcrumDataContainer = ({ children }: BreadcrumData) => {
  const [path, setPath] = useState<any>([]);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname && pathname !== "/") {
      if (pathname.includes("items")) return;

      const data = pathname.split("/").filter(item => item !== "/" && item !== "");

      setPath(data);
    } else {
      setPath([]);
    }
  }, [pathname]);

  

  const route = {
    path,
  };

  return (
    <BreadcrumDataContext.Provider value={route}>
      {children}
    </BreadcrumDataContext.Provider>
  );
};

export default BreadcrumDataContainer;
