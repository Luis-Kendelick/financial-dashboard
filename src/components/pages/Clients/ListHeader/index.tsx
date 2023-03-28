import React from "react";

// import { Container } from './styles';

const ListHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(18,_minmax(0,_1fr))] border-b-[1px] border-neutral-200 border-solid items-center px-4">
      <div className="w-4 aspect-square border-[2.5px] border-black-38 border-solid rounded-cards cursor-pointer col-span-1" />
      <p className="text-black-38 tracking-wider font-inter font-bold text-xs col-span-5 flex items-center">
        NOME
      </p>
      <p className="text-black-38 tracking-wider font-inter font-bold text-xs col-span-3 flex items-center">
        STATUS
      </p>
      <p className="text-black-38 tracking-wider font-inter font-bold text-xs col-span-4 flex items-center">
        TELEFONE
      </p>
      <p className="text-black-38 tracking-wider font-inter font-bold text-xs col-span-4 flex items-center">
        E-MAIL
      </p>
    </div>
  );
};

export default ListHeader;
