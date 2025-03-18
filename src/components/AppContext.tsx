import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom);
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        frameZoom,
        setFrameZoom,
        activePage,
        setActivePage,
        isLgScreen,
        setIsLgScreen,
        isNavbarOpen,
        handleNavClick,
        handleZoom,
        toggleNavbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
