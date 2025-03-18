import { Outlet, useNavigate } from "react-router";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Controls from "./Controls";

export default function PageLayout() {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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

  const navigate = useNavigate();

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom);
    }
  };

  const handleResetPage = () => {
    setActivePage(0);
    navigate("/store");
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        <Navbar
          onNavClick={handleNavClick}
          activePage={activePage}
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
        <Controls
          onZoom={handleZoom}
          frameZoom={frameZoom}
          onClose={handleResetPage}
          activePage={activePage}
        />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
