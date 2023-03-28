import Badge from "components/common/Badge";
import { ICarRowProps } from "models/ICar";
import React from "react";

const CarRow: React.FC<ICarRowProps> = ({ carInfo, className }) => {
  return (
    <div className="w-full h-36 grid grid-cols-10 pl-5 border-b-2 py-5 border-neutral-200 border-solid">
      <div className="col-span-5 border-neutral-300 flex items-center h-full">
        <img src={carInfo.image} alt="" className="h-24 rounded-md border-2 border-neutral-200 border-solid" />
        <div className="h-24 flex flex-col justify-between ml-3 font-inter text-steel text-sm">
          <p className="text-dark-blue-gray font-inter font-extrabold text-base">
            {carInfo.brand_name.toLocaleUpperCase()} {carInfo.model_name}
          </p>
          <p>PLACA</p>
          <p>
            {carInfo.model_year} - {carInfo.fuel_type.toLocaleUpperCase()}
          </p>
          <p>
            {carInfo.transmission_type.toLocaleUpperCase()} - {carInfo.mileage.toLocaleString()}{" "}
            KM
          </p>
        </div>
      </div>
      <div className="col-span-2 border-neutral-300 h-full flex flex-col font-inter text-steel">
        <p className="text-sm">ANÚNCIO</p>
        <p className="text-dark-blue-gray font-extrabold text-base">
          R$ {carInfo.ad_selling_price.toLocaleString()}
        </p>
        <p className="text-sm mt-2">MÍNIMO ACEITO</p>
        <p className="text-light-gray">R$ {carInfo.ad_selling_price.toLocaleString()}</p>
      </div>
      <div className="col-span-3 h-full border-neutral-300">
        <div className="h-full w-max flex flex-col justify-around items-center">
          <Badge text={'Aguardando precificação'} className={`text-steel bg-ice-blue font-inter px-6 text-sm`}/>
          <p className="font-inter text-light-gray text-sm">
            18/04/2022 às 14:30h
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRow;
