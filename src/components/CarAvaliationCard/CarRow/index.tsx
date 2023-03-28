import React from "react";
import { ICar } from "../Cars";

interface CarRowProps {
  className?: string;
  carInfo: ICar;
}
const CarRow: React.FC<CarRowProps> = ({ carInfo, className }) => {
  return (
    <div className="w-full h-36 grid grid-cols-10 pl-5 border-b-2 py-5 border-neutral-200 border-solid">
      <div className="col-span-5 border-neutral-300 flex items-center h-full">
        <img src={carInfo.image} alt="" className="h-24 rounded-md border-2 border-neutral-200 border-solid" />
        <div className="h-24 flex flex-col justify-between ml-3">
          <p className="text-dark-blue-gray font-inter font-extrabold text-base">
            {carInfo.brand_name.toLocaleUpperCase()} {carInfo.model_name}
          </p>
          <p className="font-inter text-steel text-sm">PLACA</p>
          <p className="font-inter text-steel text-sm">
            {carInfo.model_year} - {carInfo.fuel_type.toLocaleUpperCase()}
          </p>
          <p className="font-inter text-steel text-sm">
            {carInfo.transmission_type.toLocaleUpperCase()} - {carInfo.mileage}{" "}
            KM
          </p>
        </div>
      </div>
      <div className="col-span-2 border-neutral-300 h-full flex flex-col justify-between">
        <p className="font-inter text-steel text-sm">ANÚNCIO</p>
        <p className="text-dark-blue-gray font-inter font-extrabold text-base">
          R$ {carInfo.ad_selling_price}
        </p>
        <p className="font-inter text-steel text-sm">MÍNIMO ACEITO</p>
        <p>R$ {carInfo.ad_selling_price}</p>
      </div>
      <div className="col-span-3 h-full border-neutral-300">
        <div className="h-full w-max flex flex-col justify-around items-center">
          <p className="h-8 w-52 px-4 rounded-full flex items-center justify-center bg-ice-blue font-inter text-steel text-sm">
            Aguardando precificação
          </p>
          <p className="font-interw-52 text-light-gray text-sm">
            18/04/2022 às 14:30h
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRow;
