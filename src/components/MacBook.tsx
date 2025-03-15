import { useState } from "react";
import { macbookModels } from "../data";

export default function MacBook() {
  const numOfModels = macbookModels.length;

  const [selectedChipIndex, setSelectedChipIndex] = useState(0);

  const handleChipSelect = (index) => {
    setSelectedChipIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-around bg-white p-8">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Choose your new MacBook Air
      </h1>
      <div className="flex">
        {macbookModels.map((model, index) => (
          <button
            key={index}
            onClick={() => handleChipSelect(index)}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-18 h-12 flex flex-col justify-evenly items-center border cursor-pointer ${
              index === 0
                ? "rounded-l-xl"
                : index === numOfModels - 1
                ? "rounded-r-xl border-l-0"
                : "border-l-0"
            }
            ${
              index === selectedChipIndex
                ? "border-2 border-l-2 border-blue-400"
                : "border-gray-800"
            }
            `}
          >
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
              With {model.chip} chip
            </span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
              {model.price}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col 2xl:p-4 md:items-start items-center">
        <div className="w-80 h-64 2xl:mb-0 mb-8">
          <img
            src="images/macbook-air-gold-m2.jpg"
            alt="Macbook"
            className="2xl:w-72 xl:w-52 w-48 h-full 2xl:mt-0 sm:mt-6"
          />
          <span className="2xl:text-lg xl:text-sm font-medium text-gray-800 mb-2 text-center md:text-left">
            Gold
          </span>
          <div className="flex space-x-2 mb-4 md:text-left justify-center md:justify-start">
            <button className="2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500"></button>
            <button className="2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500"></button>
            <button className="2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500"></button>
          </div>
          <img
            src="images/apple-m2-icon.png"
            alt="Chip type"
            className="w-12 h-12 xl:mb-2"
          />
          <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
            <p className="2xl:text-lg xl:text-base font-semibold text-gray-800 mb-0.5">
              8-Core CPU
            </p>
          </div>
          <button
            type="button"
            className="w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
