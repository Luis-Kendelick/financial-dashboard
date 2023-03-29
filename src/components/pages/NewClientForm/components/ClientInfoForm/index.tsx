import Input from "components/common/Input";
import React from "react";

const ClientInfoForm: React.FC = () => {
  return (
    <div className="w-full h-[84%] overflow-y-auto scrollbar flex flex-wrap px-10 pb-10 pt-8">
      <div className="flex flex-wrap w-1/2 h-auto gap-y-4 justify-between">
        <Input
          placeholder="Nome"
          inputName="clientName"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="name"
        />
        <Input
          placeholder="Sobrenome"
          inputName="clientLastName"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="name"
        />
        <Input
          placeholder="E-mail"
          inputName="clientEmail"
          className="w-full min-h-[4rem]"
          inputType="email"
        />
        <Input
          placeholder="Celular"
          inputName="clientPhone"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="cellphone"
        />
        <Input
          placeholder="CEP"
          inputName="clientCep"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="cep"
        />
        <Input
          placeholder="Endereço"
          inputName="clientAddressLine"
          className="w-full min-h-[4rem]"
          inputType="address"
        />
        <Input
          placeholder="Número"
          inputName="clientAddressNumber"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="number"
        />
        <Input
          placeholder="Complemento"
          inputName="clientAddressComplement"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="text"
        />
        <Input
          placeholder="Bairro"
          inputName="clientAddressDistrict"
          className="w-full min-h-[4rem]"
          inputType="text"
        />
        <Input
          placeholder="Cidade"
          inputName="clientCity"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="text"
        />
        <Input
          placeholder="Estado"
          inputName="clientState"
          className="w-[calc(50%-.5rem)] min-h-[4rem]"
          inputType="text"
        />
      </div>
    </div>
  );
};

export default ClientInfoForm;
