/*
 * Component to zoom in and zoom out
 */

export default function Controls({ onZoom, frameZoom }) {
  return (
    <div className="absolute top-3 right-3 space-x-2">
      <button
        className="text-2xl text-pink-400 cursor-pointer"
        onClick={onZoom}
      >
        <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
      </button>
      <button className="text-2xl text-pink-400">
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
}
