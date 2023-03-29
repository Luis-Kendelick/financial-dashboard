import React, { useEffect } from "react";
import CarRow from "./CarRow";
import { useAppDispatch, useAppSelector } from "reducks/app/redux-hooks";
import { fetchCars } from "reducks/features/cars/carsSlice";
import CarRowLoader from "./CarRow/CarRowLoader";

const CarAvaliationCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cars, loading } = useAppSelector((state) => state.reducer.carsSlice);
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <div className="bg-white-two w-full h-full rounded-cards border-neutral-200 border-2 pt-6 flex flex-col">
      <div className="flex justify-between font-inter font-medium mb-[20px] pl-5 pr-8 text-black-87 text-base">
        <p>Últimas avaliações</p>
        <p>Hoje -</p>
      </div>
      <div className="w-full h-[30px] flex items-center justify-between border-b-[1px] border-solid border-neutral-200">
        <div className="grid grid-cols-10 w-full h-full font-inter font-medium text-black-05 text-[10px] tracking-wider pl-5">
          <p className="col-span-5">DADOS DO VEÍCULO</p>
          <p className="col-span-2">VALOR</p>
          <p className="col-span-3">STATUS</p>
        </div>
      </div>
      <div className="overflow-y-auto h-full scrollbar">
        {!loading &&
          cars.map((item, index) => (
            <CarRow carInfo={item} key={index} />
          ))}
        {loading && [...Array(6)].map(() => <CarRowLoader />)}
      </div>
    </div>
  );
};

export default CarAvaliationCard;
