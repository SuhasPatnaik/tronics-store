import { useState } from "react";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";

function App() {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const handleZoom = () => {
    setFrameZoom(!frameZoom);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-xl resize overflow-auto transition-all duration-100 relative`}
      >
        <Navbar onNavClick={handleNavClick} activePage={activePage} />
        <Controls onZoom={handleZoom} frameZoom={frameZoom} />
      </div>
    </div>
  );
}

export default App;
