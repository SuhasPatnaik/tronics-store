import { Outlet } from "react-router";
import { useEffect } from "react";

import Navbar from "./Navbar";
import Controls from "./Controls";
import { useAppContext } from "./AppContext";

export default function PageLayout() {
  const { frameZoom, setFrameZoom, setIsLgScreen } = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setFrameZoom(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        <Navbar />
        <Controls />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
