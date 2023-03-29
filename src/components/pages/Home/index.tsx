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
  const avgTicket = {
    value: 23345,
    percentageSinceYesterday: 4,
    isDroping: true,
  };
  const totalCars = {
    value: 456,
    percentageSinceYesterday: 4,
    isDroping: true,
  };
  const totalAvaliationsToday = {
    value: 54,
    percentageSinceYesterday: 4,
    isDroping: false,
  };
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-y-7 bg-pale-gray text-black h-full w-full">
      <div className=" w-full row-span-1 col-span-3 grid grid-cols-3 gap-x-5">
        <InfoCard
          title="avaliações hoje"
          value={totalAvaliationsToday.value.toLocaleString()}
          percentage={totalAvaliationsToday.percentageSinceYesterday}
          icon={VehicleIcon}
          avgPriceIsDropping={totalAvaliationsToday.isDroping}
          percentagePeriod="desde ontem"
        />
        <InfoCard
          title="carros publicados"
          value={totalCars.value.toLocaleString()}
          percentage={totalCars.percentageSinceYesterday}
          icon={PersonIcon}
          avgPriceIsDropping={totalCars.isDroping}
          percentagePeriod="este mês"
        />
        <InfoCard
          title="ticket médio do estoque"
          value={`R$ ${avgTicket.value.toLocaleString()}`}
          percentage={avgTicket.percentageSinceYesterday}
          icon={MoneyIcon}
          avgPriceIsDropping={avgTicket.isDroping}
          percentagePeriod="este mês"
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
              <div className="w-max ml-[2px] fill-light-gray cursor-pointer">
                <Icon IconComponent={HelpIcon} />
              </div>
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
