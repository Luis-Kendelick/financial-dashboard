import Badge from "components/common/Badge";

const CarRowLoader: React.FC = () => {
  const loaderClassNames =
    "opacity-20 rounded-full animate-pulse bg-gradient-to-r from-neutral-200 to-neutral-100 dark:from-neutral-500 dark:to-neutral-300";
  return (
    <div className="w-full h-36 grid grid-cols-10 pl-5 border-b-2 py-5 border-neutral-200 border-solid">
      <div className="col-span-5 border-neutral-300 flex items-center h-full">
        <div className={`h-24 w-28 ${loaderClassNames} rounded-md`} />
        <div className="h-24 flex flex-col justify-between ml-3 font-inter text-steel text-sm">
          <p className={`${loaderClassNames} h-4 w-32`} />
          <p>PLACA</p>
          <p className={`${loaderClassNames} h-4 w-32`} />
          <p>KM</p>
        </div>
      </div>
      <div className="col-span-2 border-neutral-300 h-full flex flex-col font-inter text-steel">
        <p className="text-sm">ANÚNCIO</p>
        <div className="flex items-center h-5">
          <p className="text-dark-blue-gray font-extrabold text-base">R$</p>
          <p className={`${loaderClassNames} ml-2 h-full w-20`} />
        </div>
        <p className="text-sm mt-2">MÍNIMO ACEITO</p>
        <div className="flex items-center h-5">
          <p className="text-light-gray">R$</p>
          <p className={`${loaderClassNames} ml-2 h-full w-20`} />
        </div>
      </div>
      <div className="col-span-3 h-full border-neutral-300">
        <div className="h-full w-max flex flex-col justify-around items-center">
          <div
            className={`${loaderClassNames} h-7 w-48 px-4`}
          />
          <p className={`${loaderClassNames} h-7 w-32`} />
        </div>
      </div>
    </div>
  );
};

export default CarRowLoader;
