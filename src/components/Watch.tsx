import { watchModels } from "../data";

export default function Watch() {
  return (
    <div className="flex flex-col items-center md:justify-around bg-white h-full py-8 px-4 justify-center">
      <h1 className="2xl:text-4xl xl:text-3xl text-2xl font-semibold text-gray-800 mb-8">
        Find the watch that's right for you
      </h1>
      <div className="w-full flex justify-around">
        {watchModels.map((watch, index) => (
          <div className="2xl:w-60 w-48 flex flex-col justify-around group">
            <div
              key={index}
              className="w-full h-64 mb-4 overflow-hidden relative"
            >
              <img
                src={watch.imgs[0]}
                alt={watch.name}
                className="absolute w-full h-full object-contain opacity-100 group-hover:opacity-0 transition duration-300"
              />
              <img
                src={watch.imgs[1]}
                alt={watch.name}
                className="absolute w-full h-full object-contain opacity-0 group-hover:opacity-100 transition duration-300"
              />
            </div>
            <h3 className="2xl:text-xl xl:text-lg text-sm font-semibold">
              {watch.name}
            </h3>
            <a href="#" className="my-2 text-base text-blue-400">
              {watch.price}
            </a>
            <div className="md:text-sm text-xs text-gray-700 my-2">
              {watch.desc.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </div>
            <button className="w-min text-sm mt-4 py-1 px-2 bg-blue-400 rounded-full text-white cursor-pointer">
              Shop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
