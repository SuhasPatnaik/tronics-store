import {imacModels } from "../data"

export default function IMac() {
  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 relative">
      <div className="h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50">
        <img src="images/imac/green-side.jpg" alt="IMac" className="2xl:max-w-full xl:max-w-36 max-w-24 max-h-[80%]" />

      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img src="images/imac/green-front.jpg" alt="IMac" className="max-w-[75%]" />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img src="images/imac/green-back.jpg" alt="IMac" className="max-w-[75%]" />
      </div>
      <div className="absolute md:top-1/2 top-3/4 md:left-4 left-12 transform -translate-1/2 flex flex-col lg:space-y-2 space-y-1 bg-gray-50">
        <div className="flex items-center space-x-2">
          <button className="2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full flex items-center justify-center bg-[#10505b]"></button>
        </div>
      </div>
    </div>
  )
}
