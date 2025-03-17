import { Outlet, useNavigate } from "react-router";

import { useState } from "react";
import Navbar from "./Navbar";
import Controls from "./Controls";

export default function PageLayout() {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const navigate = useNavigate();

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const handleZoom = () => {
    setFrameZoom(!frameZoom);
  };

  const handleResetPage = () => {
    setActivePage(0);
    navigate("/store");
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        <Navbar onNavClick={handleNavClick} activePage={activePage} />
        <Controls
          onZoom={handleZoom}
          frameZoom={frameZoom}
          onClose={handleResetPage}
        />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
