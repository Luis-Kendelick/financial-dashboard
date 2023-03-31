import InfoCard from "components/common/InfoCard";
import React from "react";
import { ReactComponent as VehicleIcon } from "@/assets/icons/ic-vehicle.svg";
import { ReactComponent as PersonIcon } from "@/assets/icons/ic-devices.svg";
import { ReactComponent as MoneyIcon } from "@/assets/icons/ic-money.svg";
import { ReactComponent as HelpIcon } from "@/assets/icons/ic-help.svg";
import CarAvaliationCard from "components/CarAvaliationCard";
import { BrandsPng } from "mocks/Brands";
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
    <div className="grid gap-y-6 grid-cols-3 grid-rows-[repeat(10,_minmax(0,_1fr))] bg-pale-gray text-black h-full w-full">
      <div className="row-span-2 col-span-3 grid grid-cols-3 grid-rows-1 gap-x-5">
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
      <div className="gap-x-5 row-span-8 col-span-3 grid grid-cols-3 grid-rows-6">
        <div className="col-span-2 row-span-full rounded-cards">
          <CarAvaliationCard />
        </div>
        <div className="col-span-1 row-span-full rounded-cards grid grid-rows-6 gap-y-8">
          <div className="row-span-4 bg-white rounded-cards py-5 pl-5 pr-5 lg:max-2xl:py-3 border-neutral-200 border-2 flex flex-col">
            <p className="font-inter font-medium text-base mb-5 lg:max-2xl:mb-1 lg:max-2xl:text-xs">
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
                  <img src={item.brandLogo} alt="" className="h-10 lg:max-2xl:h-4" />
                  <p className="font-inter font-bold text-base flex-grow ml-5 lg:max-2xl:text-xxs">
                    {item.modelWithMoreBuyIntentions}
                  </p>
                  <p className="font-inter font-medium text-base mr-14 lg:max-2xl:text-xxs">
                    {item.intentionsNumber}
                  </p>
                </div>
              ))}
          </div>
          <div className="row-span-2 bg-white rounded-cards border-neutral-200 border-2 px-5 py-3 flex flex-col justify-between">
            <div className="w-full h-1/6 flex items-center">
              <p className="font-inter font-medium text-base">
                Preços - Dryve x KBB
              </p>
              <div className="w-max ml-[2px] fill-light-gray cursor-pointer">
                <Icon IconComponent={HelpIcon} />
              </div>
            </div>
            <div className="w-full h-5/6 flex items-center pt-2">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
