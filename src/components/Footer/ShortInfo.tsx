import { Headset, CircleUserRound, Tag } from "lucide-react";

function ShortInfo() {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-1">
      <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-0 md:justify-between">
        <div className="mx-auto text-center flex flex-col">
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 p-3 rounded-4xl">
              <Headset size={35} />
            </div>
          </div>
          <div className="mt-2">
            <p className="font-bold text-xl">Product Support</p>
            <p className="max-w-90 md:max-w-65 pt-2">
              Up to 3 years on-site warranty available for your peace of mind.
            </p>
          </div>
        </div>
        <div className="mx-auto text-center flex flex-col">
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 p-3 rounded-4xl">
              <CircleUserRound size={35} />
            </div>
          </div>
          <div className="mt-2">
            <p className="font-bold text-xl">Personal Account</p>
            <p className="max-w-90 md:max-w-65 pt-2">
              With big discounts, free delivery and a dedicated support
              specialist.
            </p>
          </div>
        </div>
        <div className="mx-auto text-center flex flex-col">
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 p-3 rounded-4xl">
              <Tag size={35} />
            </div>
          </div>
          <div className="mt-2">
            <p className="font-bold text-xl">Amazing Savings</p>
            <p className="max-w-90 md:max-w-65 pt-2">
              Up to 70% off new Products, you can be sure of the best price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortInfo;
