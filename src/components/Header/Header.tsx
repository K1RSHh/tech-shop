import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ChevronDown,
  TextAlignJustify,
  Search,
  ShoppingCart,
  CircleUserRound,
  Clock,
  MapPin,
} from "lucide-react";

function Header() {
  const [shopInfoOpen, setShopInfoOpen] = useState(false);

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
        <div className="m-auto relative">
          <button
            onClick={() => setShopInfoOpen(!shopInfoOpen)}
            className="flex"
          >
            <p className="text-xs font-poppins font-semibold max-w-44">
              <span className="text-gray-400">Mon-Thu:</span>{" "}
              <span className="text-white ">9:00 AM - 5:30 PM</span>
            </p>
            <ChevronDown color="#fff" size={17} />
          </button>
          {shopInfoOpen ? (
            <div className="fixed left-1/2 top-9 z-50 w-full max-w-80 -translate-x-1/2 bg-white shadow-xl">
              <div className="flex flex-col">
                <div className="flex gap-3 font-semibold px-8 py-3">
                  <Clock color="#000" />
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">We are open:</p>
                    <p className="text-sm">
                      <span className="text-gray-400">Mon-Thu:</span> 9:00 AM -
                      5:30 PM
                    </p>
                    <p>
                      <span className="text-gray-400">Fr:</span> 9:00 AM - 6:00
                      PM
                    </p>
                    <p>
                      <span className="text-gray-400">Sat:</span> 11:00 AM -
                      5:00 PM
                    </p>
                  </div>
                </div>
                <span className="h-0.5 w-full bg-gray-300 my-2"></span>
                <div className="flex gap-3 px-8 py-3">
                  <MapPin color="#000" size={28} />
                  <p className="font-medium text-xs">
                    Address: 1234 Street Adress, City Address, 1234
                  </p>
                </div>
                <span className="h-0.5 w-full bg-gray-300 my-2"></span>
                <div className="m-auto mb-3">
                  <p className="text-sm">
                    Phones:{" "}
                    <span className="text-blue-600">(00) 1234 5678</span>
                  </p>
                  <p className="text-sm">
                    E-mail:{" "}
                    <span className="text-blue-600">shop@email.com</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
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
      <div className="flex justify-around items-center bg-blue-600 w-full px-3 h-16">
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
