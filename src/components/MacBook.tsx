import { useState } from "react";
import { macbookModels } from "../data";

export default function MacBook() {
  const numOfModels = macbookModels.length;

  const [selectedChipIndex, setSelectedChipIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const currentModel = macbookModels[selectedChipIndex];
  const currentColor = currentModel.colors[selectedColorIndex];

  const handleChipSelect = (index: number) => {
    setSelectedChipIndex(index);
    setSelectedColorIndex(0);
  };

  return (
    <div className="h-full flex flex-col items-center sm:gap-12 lg:gap-0 bg-white p-8">
      <h1 className="2xl:text-4xl xl:text-3xl text-2xl text-center font-semibold text-gray-800 mb-8">
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
        <div className="w-80 h-64 2xl:mb-0 mb-8 text-center">
          <img
            src={currentColor.img}
            alt={`Macbook Air with ${currentModel.chip}`}
            className="2xl:w-72 xl:w-52 w-48 h-full 2xl:mt-0 sm:mt-6 m-auto"
          />
          <span className="2xl:text-lg xl:text-sm font-medium text-gray-800 mb-2 block text-center md:text-left">
            {currentColor.label}
          </span>
          <div className="flex space-x-2 mb-4 md:text-left justify-center md:justify-start">
            {currentModel.colors.map((color, index) => (
              <button
                key={index}
                className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 rounded-full border hover:border-blue-500 ${
                  selectedColorIndex === index
                    ? "border-2 border-blue-400"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color.bg }}
                onClick={() => setSelectedColorIndex(index)}
              ></button>
            ))}
          </div>
          <img
            src={currentModel.icon}
            alt={`Apple ${currentModel.chip} icon`}
            className="w-12 h-12 xl:mb-2 inline-block mb-4 md:block"
          />
          <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
            {currentModel.specs.map((spec, index) => (
              <p
                key={index}
                className="2xl:text-lg xl:text-base font-semibold text-gray-800 mb-0.5"
              >
                {spec}
              </p>
            ))}
          </div>
          <button
            type="button"
            className="w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0 cursor-pointer"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
