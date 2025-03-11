import { items } from "../data";

export default function Home() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50">
      <div className="flex flex-col flex-grow items-center justify-center bg-white">
        <span className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent tracking-wide mb-12">
          iPhones
        </span>
        <img
          src="images/iphone.jpg"
          alt="Picture of the latest iPhone"
          className="max-w-[65%] max-h-[65%] object-contain"
          draggable="false"
        />
      </div>
    </div>
  );
}
