import React, { ComponentType } from "react";
import Icon from "../Icon";
import { ReactComponent as PersonIcon } from "@/assets/icons/ic-person.svg";
import { ReactComponent as ArrowUpIcon } from "@/assets/icons/ic-arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "@/assets/icons/ic-arrow-down.svg";
import { ReactComponent as StableIcon } from "@/assets/icons/ic-stable.svg";
import { IInfoCardProps } from "models/IInfoCard";

const InfoCard: React.FC<IInfoCardProps> = ({
  title,
  value,
  percentage,
  icon,
  className,
  avgPriceIsDropping = false,
  percentagePeriod,
}) => {
  return (
    <div
      className={`${
        className ?? ""
      }bg-white-two col-span-1 row-span-1 rounded-cards border-neutral-200 border-2 py-3.5 lg:max-2xl:py-0 px-5 flex justify-between`}
    >
      <div className="w-4/5 h-full flex flex-col justify-around xs:max-2xl:hidden">
        <h3 className="font-inter font-medium tracking-widest text-xs text-black-05">
          {title.toLocaleUpperCase()}
        </h3>
        <h1 className="text-black-87 text-3xl">{value}</h1>
        <div className="w-full flex items-center">
          <Icon
            IconComponent={
              avgPriceIsDropping
                ? ArrowDownIcon
                : avgPriceIsDropping === null
                ? StableIcon
                : ArrowUpIcon
            }
            className={`w-5 flex ${
              avgPriceIsDropping
                ? "fill-blood-red"
                : avgPriceIsDropping === null
                ? "fill-black-87"
                : "fill-blue-violet"
            }`}
          />
          <h3
            className={`font-inter font-medium text-xs ${
              avgPriceIsDropping ? "text-blood-red" : "text-blue-violet"
            }`}
          >
            {percentage}%
          </h3>
          <h3 className="ml-1 font-inter font-medium text-[10px] text-black-05">
            {percentagePeriod}
          </h3>
        </div>
      </div>
      <div className="2xl:hidden w-4/5 flex flex-row py-2 md:lg:py-1">
        <div className="flex max-w-min h-full">
          <h1 className="text-black-87 text-xl">{value.replace('R$', '')}</h1>
        </div>
        <div className="max-w-fit flex h-full flex-col ml-3 mt-1">
          <h3 className="font-inter font-medium text-xxs leading-0 text-black-05">
            {title.toLocaleUpperCase()}
          </h3>
          <div className="flex items-center">
            <Icon
              IconComponent={
                avgPriceIsDropping !== null ? ArrowDownIcon : StableIcon
              }
              className={`w-4 flex ${
                avgPriceIsDropping
                  ? "fill-blood-red"
                  : avgPriceIsDropping === null
                  ? "fill-black-87"
                  : "fill-blue-violet rotate-180"
              }`}
            />
            <h3
              className={`font-inter font-medium text-2xxs ${
                avgPriceIsDropping ? "text-blood-red" : "text-blue-violet"
              }`}
            >
              {percentage}%
            </h3>
            <h3 className="ml-1 font-inter font-medium text-2xxs text-black-05">
              {percentagePeriod}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-1/5 h-full flex items-center justify-end">
        <div className="w-[64px] aspect-square lg:max-2xl:w-10 flex items-center justify-center rounded-full bg-ice-blue">
          <Icon
            className="fill-bright-blue scale-125 lg:max-2xl:scale-90"
            IconComponent={icon ? icon : PersonIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
