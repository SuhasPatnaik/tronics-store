import { Link } from "react-router";
import { navItems } from "../data";

export default function Navbar({
  onNavClick,
  activePage,
  isNavbarOpen,
  toggleNavbar,
}) {
  return (
    <>
      <div
        className={`2xl:w-80 xl:w-52 w-44 h-full bg-gray-200 flex flex-shrink-0 flex-col justify-between pt-5 px-6 pb-14 md:pb-0 absolute md:relative z-10 transition-transform duration-300 ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-110 md:-translate-x-0"
        }`}
      >
        <a
          href="#"
          className="2xl:text-2xl xl:text-xl font-bold text-pink-600 tracking-wider mb-14"
        >
          Apple Products
        </a>
        <div className="flex flex-col flex-grow">
          {navItems.map((navItem, index) => {
            return (
              <Link
                key={index}
                to={`${
                  navItem.label.toLowerCase() === "home"
                    ? "/store"
                    : `/shop/buy-${navItem.label.toLowerCase()}`
                }`}
                className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer"
                onClick={() => onNavClick(index)}
              >
                <i className={`${navItem.icon} text-xl text-pink-400`}></i>
                <span className="text-sm text-gray-500 mr-auto mx-2.5 tracking-wider">
                  {navItem.label}
                </span>
                <i
                  className={`text-lg text-yellow-400 ${
                    activePage === index
                      ? navItem.activeIcon
                      : navItem.inactiveIcon
                  }`}
                ></i>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-between pr-6 pb-2">
          <a href="https://www.instagram.com/apple/" target="_blank">
            <i className="bx bxl-instagram text-2xl text-pink-600"></i>
          </a>
          <a href="https://x.com/Apple" target="_blank">
            <i className="bx bxl-twitter text-2xl text-pink-600"></i>
          </a>
          <a href="https://www.facebook.com/apple/" target="_blank">
            <i className="bx bxl-facebook text-2xl text-pink-600"></i>
          </a>
          <a href="https://www.youtube.com/apple" target="_blank">
            <i className="bx bxl-youtube text-2xl text-pink-600"></i>
          </a>
        </div>
      </div>
      <button
        className="fixed md:hidden bottom-4 left-4 p-2 text-4xl text-blue-400 z-30"
        onClick={() => toggleNavbar()}
      >
        {isNavbarOpen ? (
          <i className="bx bx-x"></i>
        ) : (
          <i className="bx bx-menu"></i>
        )}
      </button>
    </>
  );
}
