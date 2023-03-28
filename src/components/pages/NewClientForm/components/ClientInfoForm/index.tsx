import Input from "components/common/Input";
import { IFormInputs } from "models/IForm";
import React from "react";
import { useFormContext } from "react-hook-form";
import { EmailValidationRegex, NameValidationRegex } from "utils/RegexPatterns";

const ClientInfoForm: React.FC = () => {
  const formMethods = useFormContext<IFormInputs>();
  const { handleSubmit } = formMethods;

  return (
    <div
      className="w-full h-full grid grid-rows-[repeat(8,_minmax(0,_1fr))] grid-cols-4 gap-y-4 gap-x-4 px-10 pb-10 pt-8"
    >
      <Input
        placeholder="Nome"
        inputName="clientName"
        className="col-span-1"
        registerOptions={{
          required: true,
          pattern: {
            value: NameValidationRegex,
            message: "Comece com letra maiúscula e não use números.",
          },
          minLength: {
            value: 3,
            message: "Mínimo de 3 caracteres",
          },
          maxLength: {
            value: 20,
            message: "Máximo de 20 caracteres",
          },
        }}
      />
      <Input
        placeholder="Sobrenome"
        inputName="clientLastName"
        className="col-span-1"
        registerOptions={{
          required: true,
          pattern: {
            value: NameValidationRegex,
            message: "Comece com letra maiúscula e não use números.",
          },
          minLength: {
            value: 3,
            message: "Mínimo de 3 caracteres",
          },
          maxLength: {
            value: 20,
            message: "Máximo de 20 caracteres",
          },
        }}
      />
      <Input
        placeholder="E-mail"
        inputName="clientEmail"
        className="col-span-2 row-start-2 row-end-3"
        registerOptions={{
          required: true,
          pattern: {
            value: EmailValidationRegex,
            message: "E-mail inválido",
          },
        }}
      />
      <Input
        placeholder="Telefone"
        inputName="clientPhone"
        className="row-start-3 row-end-4"
        isPhoneInput
      />
      <Input
        placeholder="CEP"
        inputName="clientCep"
        className="row-start-4 row-end-5"
      />
      <Input
        placeholder="Endereço"
        inputName="clientAddressLine"
        className="col-span-2 row-start-5 row-end-6"
      />
      <Input
        placeholder="Número"
        inputName="clientAddressNumber"
        className="row-start-6 row-end-7"
      />
      <Input
        placeholder="Complemento"
        inputName="clientAddressComplement"
        className="row-start-6 row-end-7"
      />
      <Input
        placeholder="Bairro"
        inputName="clientAddressDistrict"
        className="col-span-2 row-start-7 row-end-8"
      />
      <Input
        placeholder="Cidade"
        inputName="clientCity"
        className="col-span-1 row-start-[8] row-end-[9]"
      />
      <Input
        placeholder="Estado"
        inputName="clientState"
        className="row-start-[8] row-end-[9]"
      />
    </div>
  );
};

export default ClientInfoForm;
