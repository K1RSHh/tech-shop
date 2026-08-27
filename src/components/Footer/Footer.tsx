import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FOOTER_DATA } from "./footerData";

function Footer() {
  const [openSectionId, setOpenSectionId] = useState<string | null>("pc-parts");

  const toggleSection = (id: string) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  const payment_methods = [
    { id: "1", image: "/Footer/paypal.png" },
    { id: "2", image: "/Footer/visa.png" },
    { id: "3", image: "/Footer/maestro.png" },
    { id: "4", image: "/Footer/discover.png" },
    { id: "5", image: "/Footer/american-express.png" },
  ];

  return (
    <div className="w-full bg-black mt-9 pt-9 pb-8">
      <div className="max-w-350 mx-auto px-4">
        <div className="flex flex-wrap md:mx-10 items-center justify-center md:justify-between gap-6 xl:mb-11">
          {/* text block */}
          <div className="flex flex-col xl:gap-2 text-center md:text-left">
            <p className="text-white text-lg md:text-lg xl:text-4xl font-medium">
              Sign Up To Our Newsletter.
            </p>
            <p className="pt-1 md:pt-0 text-white text-xs xl:text-lg font-light">
              Be the first to hear about the latest offers.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-row w-full md:w-auto max-w-md items-center gap-2"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="xl:w-96 flex-1 bg-transparent text-white border border-white rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              type="submit"
              className="sm:w-32 md:w-36 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-2.5 rounded-3xl transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
        <div className="grid grid-cols-1 mt-7 mb-7 xl:grid-cols-5 gap-6 md:mx-20 text-white text-xs">
          {/* 4 стандартні колонки */}
          {FOOTER_DATA.map((section) => {
            const isOpen = openSectionId === section.id;

            return (
              <div
                key={section.id}
                className="border-b border-slate-200 xl:border-b-0 pb-3 md:pb-0"
              >
                {/* title */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between text-left font-bold text-sm text-slate-200 md:text-slate-200 md:cursor-default py-2 md:py-0 md:mb-4"
                >
                  <span className="text-xs font-bold">{section.title}</span>
                  {/* mobile/table arrow */}
                  <span className="xl:hidden">
                    {isOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </button>

                {/* text list */}
                <ul
                  className={`flex-col gap-4 xl:gap-2.5 ${
                    isOpen ? "flex" : "hidden"
                  } xl:flex pt-2 md:pt-0`}
                >
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        to={link.link}
                        className="text-slate-200 hover:underline text-xs font-light"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* address */}
          <div className="border-b border-slate-200 xl:border-b-0 pb-3 xl:pb-0">
            <button
              onClick={() => toggleSection("address")}
              className="w-full flex items-center justify-between text-left font-bold text-sm text-slate-200 xl:cursor-default py-2 xl:py-0 xl:mb-4"
            >
              <span>Address</span>
              <span className="md:hidden">
                {openSectionId === "address" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>

            <div
              className={`flex-col gap-2 text-slate-200 ${
                openSectionId === "address" ? "flex" : "hidden"
              } xl:flex pt-2 xl:pt-0`}
            >
              <p className="text-slate-200">
                Address: 1234 Street Address City Address, 1234
              </p>
              <p className="text-slate-200">
                Phones:{" "}
                <a
                  href="tel:0012345678"
                  className="text-blue-500 hover:underline"
                >
                  (00) 1234 5678
                </a>
              </p>
              <p className="text-slate-200">
                We are open: Monday-Thursday: 9:00 AM - 5:30 PM
              </p>
              <p className="text-slate-200">Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-slate-200">Saturday: 11:00 AM - 5:00 PM</p>
              <p className="text-slate-200">
                E-mail:{" "}
                <a
                  href="mailto:shop@email.com"
                  className="text-blue-500 hover:underline"
                >
                  shop@email.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-y-4 pt-6 mt-8 ">
          <div className="flex items-center gap-3 order-1">
            <Link to="/">
              <img
                className="w-5"
                src="/Header/facebook.svg"
                alt="facebook_icon"
              />
            </Link>
            <Link to="/">
              <img
                className="w-5"
                src="/Header/instagram.svg"
                alt="instagram_icon"
              />
            </Link>
          </div>
          <p className="order-2 md:order-3 text-white text-right">
            Copyright © 2020 Shop Pty. Ltd.
          </p>
          <div className="w-full md:w-auto flex items-center justify-center gap-2 order-3 md:order-2">
            {payment_methods.map((item) => (
              <div id={item.id}>
                <img src={item.image} alt="payment_icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
