import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

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
      <div></div>
    </div>
  );
}

export default Header;
