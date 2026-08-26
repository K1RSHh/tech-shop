import { motion } from "motion/react";

function Footer() {
  return (
    <div className="w-full bg-black mt-9 pt-9 pb-8">
      <div className="max-w-350 mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 xl:mb-11">
          {/* Текстовий блок */}
          <div className="flex flex-col xl:gap-2 text-center md:text-left">
            <p className="text-white text-lg xl:text-4xl font-medium">
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
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
