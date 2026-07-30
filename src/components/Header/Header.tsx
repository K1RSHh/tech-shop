import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  ChevronDown,
  TextAlignJustify,
  Search,
  ShoppingCart,
  CircleUserRound,
  Clock,
  MapPin,
  X,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function Header() {
  const [shopInfoOpen, setShopInfoOpen] = useState(false);
  const [accountOpen, SetAccountOpen] = useState(false);
  const [sideBarsOpen, setSideBarsOpen] = useState(false);

  const shopInfoRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(shopInfoRef, () => setShopInfoOpen(false));
  useOnClickOutside(accountRef, () => SetAccountOpen(false));
  useOnClickOutside(sideBarRef, () => setSideBarsOpen(false));

  return (
    <div>
      {/*header phone and table*/}
      <div className="block xl:hidden">
        <div className="relative w-full flex justify-between bg-black h-11 px-4">
          <div>
            <div className="w-16 h-12 mt-2 bg-blue-600 rounded-tl-full rounded-tr-full">
              <Link to="/" className="flex justify-center pt-2">
                <img src="/Header/Icon.svg" alt="Logo" className="w-6" />
              </Link>
            </div>
          </div>
          <div ref={shopInfoRef} className="m-auto relative">
            <button
              onClick={() => setShopInfoOpen(!shopInfoOpen)}
              className="flex"
            >
              <p className="text-xs font-poppins font-semibold max-w-44">
                <span className="text-gray-400">Mon-Thu:</span>{" "}
                <span className="text-white ">9:00 AM - 5:30 PM</span>
              </p>
              <ChevronDown
                color="#fff"
                size={17}
                className={`${shopInfoOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {shopInfoOpen ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed left-1/2 top-9 z-50 w-full max-w-80 -translate-x-1/2 bg-white shadow-xl"
                >
                  <div className="flex flex-col">
                    <div className="flex gap-3 font-semibold px-8 py-3">
                      <Clock color="#000" />
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-black">We are open:</p>
                        <p className="text-sm text-black">
                          <span className="text-gray-400">Mon-Thu:</span> 9:00
                          AM - 5:30 PM
                        </p>
                        <p className="text-black text-sm">
                          <span className="text-gray-400">Fr:</span> 9:00 AM -
                          6:00 PM
                        </p>
                        <p className="text-black text-sm">
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
                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
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
            <button onClick={() => setSideBarsOpen(!sideBarsOpen)}>
              <TextAlignJustify size={28} color="#fff" />
            </button>
          </div>
          <div className="flex items-center p-3 max-h-10 max-w-60 md:w-lg md:max-w-lg bg-white gap-2 rounded-3xl">
            <Search size={25} color="#CACDD8" />
            <input
              type="text"
              placeholder="Search here"
              className="placeholder-gray-300 max-w-40 md:max-w-md md:w-100 font-normal text-black focus:outline-none"
            />
          </div>
          <div>
            <button>
              <ShoppingCart size={28} />
            </button>
          </div>
          <div className="relative" ref={accountRef}>
            <button onClick={() => SetAccountOpen(!accountOpen)}>
              <CircleUserRound size={28} />
            </button>
            <AnimatePresence>
              {accountOpen ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white right-2  fixed w-full max-w-45 shadow-xl z-50"
                >
                  <div className="flex flex-col gap-2 text-sm font-medium p-4">
                    <p className="w-40">My Account</p>
                    <p className="w-40">My Wish List (0)</p>
                    <p className="w-40">Compare (0)</p>
                    <p className="w-40">Create an Account</p>
                    <p className="w-40">Sign In</p>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        </div>
        <AnimatePresence>
          {sideBarsOpen ? (
            <motion.div
              ref={sideBarRef}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute w-full max-w-2xs md:max-w-96 py-6 pl-6 pr-4 bg-white top-0 z-50"
            >
              <div className="flex justify-between items-center">
                <img src="/Header/IconSideBar.svg" alt="IconSideBar" />
                <button onClick={() => setSideBarsOpen(!sideBarsOpen)}>
                  <X color="#000" />
                </button>
              </div>
              <span className="flex h-0.5 w-full bg-gray-300 my-5"></span>
              <div className="flex flex-col gap-4">
                <Link to="/" className="flex justify-between items-center">
                  <p>Laptops</p>
                  <ChevronRight color="#000" size={15} />
                </Link>
                <Link to="/" className="flex justify-between items-center">
                  <p>Desktop PCs</p>
                  <ChevronRight color="#000" size={15} />
                </Link>
                <Link to="/" className="flex justify-between items-center">
                  <p>Networking Devices</p>
                  <ChevronRight color="#000" size={15} />
                </Link>
                <Link to="/" className="flex justify-between items-center">
                  <p>Printers & Scanners</p>
                  <ChevronRight color="#000" size={15} />
                </Link>
                <Link to="/" className="flex justify-between items-center">
                  <p>PC Parts</p>
                  <ChevronRight color="#000" size={15} />
                </Link>
                <Link to="/" className="flex justify-between items-center">
                  <p>All Other Products</p>
                  <ChevronRight color="#000" size={15} />
                </Link>
                <Link to="/" className="flex justify-between items-center">
                  <p>Repairs</p>
                  <ChevronRight color="#000" size={15} />
                </Link>
              </div>
              <motion.button whileTap={{ scale: 0.9 }}>
                <Link
                  to="/"
                  className="inline-block font-semibold text-blue-600 mt-5 border-3 border-blue-600 px-12 py-2.5 rounded-3xl"
                >
                  Our Deals
                </Link>
              </motion.button>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
      {/*Header for desktop*/}
      <AnimatePresence>
        <div className="hidden xl:block">
          {/*header top*/}
          <div className="w-full bg-black h-11">
            <div className="max-w-350 h-full flex justify-between items-center m-auto">
              <div ref={shopInfoRef} className="relative">
                <button
                  onClick={() => setShopInfoOpen(!shopInfoOpen)}
                  className="flex cursor-pointer"
                >
                  <p className="text-xs font-poppins font-semibold max-w-44">
                    <span className="text-gray-400">Mon-Thu:</span>{" "}
                    <span className="text-white ">9:00 AM - 5:30 PM</span>
                  </p>
                  <ChevronDown
                    color="#fff"
                    size={17}
                    className={`${shopInfoOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {shopInfoOpen ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed  top-9 z-50 w-full max-w-80 bg-white shadow-xl"
                    >
                      <div className="flex flex-col">
                        <div className="flex gap-3 font-semibold px-8 py-3">
                          <Clock color="#000" />
                          <div className="flex flex-col gap-2">
                            <p className="text-xs text-black">We are open:</p>
                            <p className="text-sm text-black">
                              <span className="text-gray-400">Mon-Thu:</span>{" "}
                              9:00 AM - 5:30 PM
                            </p>
                            <p className="text-black text-sm">
                              <span className="text-gray-400">Fr:</span> 9:00 AM
                              - 6:00 PM
                            </p>
                            <p className="text-black text-sm">
                              <span className="text-gray-400">Sat:</span> 11:00
                              AM - 5:00 PM
                            </p>
                          </div>
                        </div>
                        <span className="h-0.5 w-full bg-gray-300 my-2"></span>
                        <div className="flex gap-3 px-8 py-3">
                          <MapPin color="#000" size={28} />
                          <p className="text-stone-950 font-medium text-xs ">
                            Address: 1234 Street Adress, City Address, 1234
                          </p>
                        </div>
                        <span className="h-0.5 w-full bg-gray-300 my-2"></span>
                        <div className="m-auto mb-3">
                          <p className="text-sm">
                            Phones:{" "}
                            <span className="text-blue-600">
                              (00) 1234 5678
                            </span>
                          </p>
                          <p className="text-sm text-black">
                            E-mail:{" "}
                            <span className="text-blue-600">
                              shop@email.com
                            </span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </AnimatePresence>
              </div>
              <div className="">
                <span className="text-neutral-400 text-xs font-semibold">
                  Visit our showroom in 1234 Street Adress City Address, 1234{" "}
                  <motion.button
                    whileHover={{ color: "#005EAD" }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white cursor-pointer border-b-2"
                  >
                    Contact Us
                  </motion.button>
                </span>
              </div>
              <div className="flex gap-3.5">
                <motion.button
                  whileHover={{ color: "#005EAD" }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer text-xs font-semibold"
                >
                  <span>Call Us: (00) 1234 5678</span>
                </motion.button>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer w-5"
                  >
                    <img
                      src="/Header/facebook.svg"
                      alt="facebook"
                      className="w-6"
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer w-5"
                  >
                    <img
                      src="/Header/instagram.svg"
                      alt="facebook"
                      className="text-white w-6"
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          {/*header bottom*/}
          <div className="flex max-w-350 w-full h-23 m-auto pl-6 items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/" className="cursor-pointer inline-block">
                <img
                  src="Header/IconSideBar.svg"
                  alt="Logo"
                  className="w-8 h-10"
                />
              </Link>
            </motion.button>
            {/*button block*/}
            <div className="flex justify-start items-center w-full gap-6 ml-14 text-black text-sm font-semibold">
              <motion.button
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">Laptops</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">Desktop PCs</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">Networking Devices</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">Printers & Scanners</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">PC Parts</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">All Other Products</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">Repairs</Link>
              </motion.button>
              <motion.button
                className="border-2 cursor-pointer border-blue-600 rounded-3xl px-6.5 py-2 text-blue-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/">Our Deals</Link>
              </motion.button>
            </div>
            <div className="flex gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <Search size={25} color="#000" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <ShoppingCart size={25} color="#000" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-neutral-800"
              >
                <img
                  src="Header/user_photo.png"
                  alt="user_photo"
                  className="w-full h-full object-cover"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Header;
