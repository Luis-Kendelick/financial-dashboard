import Input from "components/common/Input";
import React from "react";

const ClientInfoForm: React.FC = () => {
  return (
    <div
      className="w-full h-full grid grid-rows-[repeat(8,_minmax(0,_1fr))] grid-cols-4 gap-y-4 gap-x-4 px-10 pb-10 pt-8"
    >
      <Input
        placeholder="Nome"
        inputName="clientName"
        className="col-span-1"
        inputType="name"
      />
      <Input
        placeholder="Sobrenome"
        inputName="clientLastName"
        className="col-span-1"
        inputType="name"
      />
      <Input
        placeholder="E-mail"
        inputName="clientEmail"
        className="col-span-2 row-start-2 row-end-3"
        inputType="email"
      />
      <Input
        placeholder="Telefone"
        inputName="clientPhone"
        className="row-start-3 row-end-4"
        inputType="cellphone"
      />
      <Input
        placeholder="CEP"
        inputName="clientCep"
        className="row-start-4 row-end-5"
        inputType="cep"
      />
      <Input
        placeholder="Endereço"
        inputName="clientAddressLine"
        className="col-span-2 row-start-5 row-end-6"
        inputType="address"
      />
      <Input
        placeholder="Número"
        inputName="clientAddressNumber"
        className="row-start-6 row-end-7"
        inputType="number"
      />
      <Input
        placeholder="Complemento"
        inputName="clientAddressComplement"
        className="row-start-6 row-end-7"
        inputType="text"
      />
      <Input
        placeholder="Bairro"
        inputName="clientAddressDistrict"
        className="col-span-2 row-start-7 row-end-8"
        inputType="text"
      />
      <Input
        placeholder="Cidade"
        inputName="clientCity"
        className="col-span-1 row-start-[8] row-end-[9]"
        inputType="text"
      />
      <Input
        placeholder="Estado"
        inputName="clientState"
        className="row-start-[8] row-end-[9]"
        inputType="text"
      />
    </div>
  );
};

export default ClientInfoForm;
