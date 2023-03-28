import InfoCard from "components/common/InfoCard";
import React from "react";
import { ReactComponent as VehicleIcon } from "@/assets/icons/ic-vehicle.svg";
import { ReactComponent as PersonIcon } from "@/assets/icons/ic-devices.svg";
import { ReactComponent as MoneyIcon } from "@/assets/icons/ic-money.svg";
import { ReactComponent as HelpIcon } from "@/assets/icons/ic-help.svg";
import CarAvaliationCard from "components/CarAvaliationCard";
import { BrandsPng } from "./Brands";
import PieChart from "components/PieChart";
import Icon from "components/common/Icon";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-y-7 bg-pale-gray text-black h-full w-full">
      <div className=" w-full row-span-1 col-span-3 grid grid-cols-3 gap-x-5">
        <InfoCard
          title="avaliações hoje"
          value="29"
          percentage={36}
          icon={VehicleIcon}
          avgPriceIsDropping={false}
        />
        <InfoCard
          title="avaliações hoje"
          value="397"
          percentage={4}
          icon={PersonIcon}
          avgPriceIsDropping={false}
        />
        <InfoCard
          title="avaliações hoje"
          value="29"
          percentage={-6}
          icon={MoneyIcon}
          avgPriceIsDropping={true}
        />
      </div>
      <div className="justify-between gap-x-5 w-full h-full row-span-5 col-span-3 grid grid-cols-3 grid-rows-6">
        <div className="col-span-2 row-span-full rounded-cards">
          <CarAvaliationCard />
        </div>
        <div className="col-span-1 row-span-6 rounded-cards grid grid-rows-6 gap-y-8">
          <div className="row-span-4 bg-white rounded-cards pt-5 pl-5 pr-5 border-neutral-200 border-2 flex flex-col">
            <p className="font-inter font-medium text-base mb-5">
              Top intenções de compra
            </p>
            {BrandsPng.slice(0, 5)
              .sort((a, b) => b.intentionsNumber - a.intentionsNumber)
              .map((item, index) => (
                <div
                  className={`flex justify-between items-center ${
                    index !== BrandsPng.length - 1
                      ? "border-neutral-200 border-b-2"
                      : ""
                  } flex-grow`}
                >
                  <img src={item.brandLogo} alt="" className="h-10" />
                  <p className="font-inter font-bold text-base flex-grow ml-5">
                    {item.modelWithMoreBuyIntentions}
                  </p>
                  <p className="font-inter font-medium text-base mr-14">
                    {item.intentionsNumber}
                  </p>
                </div>
              ))}
          </div>
          <div className="row-span-2 bg-white rounded-cards border-neutral-200 border-2 p-5 flex flex-col justify-between">
            <div className="w-full h-max flex items-center">
              <p className="font-inter font-medium text-base">
                Preços - Dryve x KBB
              </p>
              <button className="w-max h-max ml-2 mb-[2px] cursor-pointer">
                <Icon className="cursor-pointer" IconComponent={HelpIcon} />
              </button>
            </div>
            <div className="w-full h-4/5 flex items-center">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
