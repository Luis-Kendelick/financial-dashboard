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
  percentagePeriod
}) => {
  return (
    <div
      className={`${
        className ?? ""
      }bg-white-two rounded-cards border-neutral-200 border-2 py-3.5 px-5 flex min-w-[470px]`}
    >
      <div className="w-2/4 h-full flex flex-col justify-around">
        <h3 className="font-inter font-medium tracking-widest text-[10px] text-black-05">
          {title.toLocaleUpperCase()}
        </h3>
        <h1 className="text-black-87 text-[34px]">{value}</h1>
        <div className="w-full flex items-center">
          <Icon
            IconComponent={
              avgPriceIsDropping
                ? ArrowDownIcon
                : avgPriceIsDropping === null
                ? StableIcon
                : ArrowUpIcon
            }
            className={`w-5 flex ${avgPriceIsDropping
              ? 'fill-blood-red'
              : avgPriceIsDropping === null
              ? 'fill-black-87'
              : 'fill-blue-violet'}`}
          />
          <h3 className={`font-inter font-medium text-xs ${avgPriceIsDropping ? 'text-blood-red' : 'text-blue-violet'}`}>
            {percentage}%
          </h3>
          <h3 className="ml-1 font-inter font-medium text-[10px] text-black-05">
            {percentagePeriod}
          </h3>
        </div>
      </div>
      <div className="w-2/4 h-full flex items-center justify-end">
        <div className="w-[64px] h-[64px] flex items-center justify-center rounded-full bg-ice-blue">
          <Icon
            className="fill-bright-blue scale-125"
            IconComponent={icon ? icon : PersonIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
