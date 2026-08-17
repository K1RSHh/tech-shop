function Banner() {
  return (
    <div className="max-w-350 w-full mb-8 overflow-hidden m-auto">
      <div className="flex flex-col justify-center items-center h-full py-4 md:flex-row gap-3.5 md:gap-0 bg-blue-50 text-black">
        <div className="flex gap-1">
          <img src="/Home/Banner/banner_logo_1.svg" alt="svg_logo_1" />
          <img src="/Home/Banner/banner_logo_2.svg" alt="svg_logo_2" />
        </div>
        <span className="md:flex hidden w-0.5 h-6 mx-2.5 rounded-4xl bg-cyan-500"></span>
        <p className="text-blue-950 text-xs md:text-sm lg:text-lg">
          <span className="font-semibold">own</span> it now, up to 6 months
          interest free
        </p>
        <a className="text-blue-950 flex text-sm pl-1 underline cursor-pointer">
          learn more
        </a>
      </div>
    </div>
  );
}

export default Banner;
