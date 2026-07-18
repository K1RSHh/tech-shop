import { Link } from "react-router-dom";
import {
  ChevronDown,
  TextAlignJustify,
  Search,
  ShoppingCart,
  CircleUserRound,
} from "lucide-react";

function Header() {
  return (
    <div>
      <div className="relative w-full flex justify-between bg-black h-11 px-4">
        <div>
          <div className="w-16 h-12 mt-2 bg-blue-600 rounded-tl-full rounded-tr-full">
            <Link to="/home" className="flex justify-center pt-2">
              <img src="/public/Header/Icon.svg" alt="Logo" className="w-6" />
            </Link>
          </div>
        </div>
        <div className="m-auto">
          <button className="flex">
            <p className="text-xs font-poppins text-white font-semibold max-w-44">
              <span className="text-gray-400">Mon-Thu:</span> 9:00 AM - 5:30 PM
            </p>
            <ChevronDown color="#fff" size={17} />
          </button>
        </div>
        <div className="h-full flex items-center">
          <div className="max-w-20 h-6 border-b-2 border-white text-center items-center justify-center">
            <button className="text-white font-semibold text-xs">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/*header bottom*/}
      <div className="flex justify-between items-center bg-blue-600 w-full px-4 h-16">
        <div className=" flex items-center">
          <button>
            <TextAlignJustify size={28} color="#fff" />
          </button>
        </div>
        <div className="flex items-center p-3 max-h-10 max-w-65 md:w-lg md:max-w-lg bg-white gap-2 rounded-3xl">
          <Search size={25} color="#CACDD8" />
          <input
            type="text"
            placeholder="Search here"
            className="placeholder-gray-300 max-w-50 md:max-w-md md:w-100 font-normal text-black focus:outline-none"
          />
        </div>
        <div>
          <button>
            <ShoppingCart size={28} />
          </button>
        </div>
        <div>
          <button>
            <CircleUserRound size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
