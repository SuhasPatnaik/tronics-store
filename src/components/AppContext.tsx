import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router";

type AppContextType = {
  frameZoom: boolean;
  setFrameZoom: (frameZoom: boolean) => void;
  handleResetPage?: () => void;
  activePage: number;
  setActivePage: (activePage: number) => void;
  isLgScreen: boolean;
  setIsLgScreen: (isLgScreen: boolean) => void;
  isNavbarOpen: boolean;
  handleNavClick: (pageIndex: number) => void;
  handleZoom: () => void;
  toggleNavbar: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavClick = (pageIndex: number) => {
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

  const navigate = useNavigate();

  const handleResetPage = () => {
    setActivePage(0);
    navigate("/store");
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
        handleResetPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
