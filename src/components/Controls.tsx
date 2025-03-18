/*
 * Component to zoom in and zoom out
 */

import { useAppContext } from "./AppContext";

export default function Controls() {
  const { onZoom, frameZoom, onClose, activePage } = useAppContext();

  return (
    <div className="absolute top-3 right-3 space-x-2 z-10">
      <button
        className="text-2xl text-pink-400 cursor-pointer hidden lg:inline"
        onClick={onZoom}
      >
        <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
      </button>
      <button
        className={`text-2xl ${
          activePage === 0
            ? "text-pink-200 cursor-not-allowed"
            : "text-pink-400 cursor-pointer"
        } `}
        onClick={onClose}
      >
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
}
