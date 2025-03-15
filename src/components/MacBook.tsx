import { macbookModels } from "../data";

export default function MacBook() {
  return (
    <div className="flex flex-col items-center justify-around bg-white p-8">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Choose your new MacBook Air
      </h1>
      <div className="flex">
        <button className="2xl:w-36 md:w-26 w-28 2xl:h-18 h-12 flex flex-col justify-evenly items-center border rounded-l-xl cursor-pointer">
          <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
            With M2 chip
          </span>
          <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
            From 999$
          </span>
        </button>
        <button className="2xl:w-36 md:w-26 w-28 2xl:h-18 h-12 flex flex-col justify-evenly items-center border border-l-0 rounded-r-xl cursor-pointer">
          <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
            With M3 chip
          </span>
          <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
            From 1299$
          </span>
        </button>
      </div>
    </div>
  );
}
