import Icon from "components/common/Icon";
import Input from "components/common/Input";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ReactComponent as CloseIcon } from "assets/icons/circle-x.svg";

const ClientInfoForm: React.FC = () => {
  const { unregister } = useFormContext();
  const [hasAnotherPhoneInput, setHasAnotherPhoneInput] = React.useState(false);
  return (
    <div className="w-full h-[84%] overflow-y-auto scrollbar px-10 pb-10 pt-8">
      <div className="flex flex-wrap w-1/2 h-auto gap-y-4 justify-between">
        <Input
          placeholder="Nome"
          inputName="clientName"
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
          inputType="name"
        />
        <Input
          placeholder="Sobrenome"
          inputName="clientLastName"
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
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
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
          inputType="cellphone"
        />
        {hasAnotherPhoneInput ? (
          <div className="w-[calc(50%-0.25rem)] min-h-[4rem] relative flex items-center">
            <Input
              placeholder="Telefone"
              inputName="clientFixedPhone"
              className="w-full h-full"
              inputType="tel"
            />
            <button
              type="button"
              onClick={() => {
                setHasAnotherPhoneInput(false);
                unregister("clientFixedPhone");
              }}
              className="h-6 w-6 absolute right-3 rounded-full"
            >
              <Icon IconComponent={CloseIcon} className="fill-red-600" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setHasAnotherPhoneInput(true)}
            type="button"
            className="h-[4rem] flex items-center text-bright-blue text-base font-inter font-medium w-[calc(50%-0.5rem)] min-h-[4rem]"
          >
            + adicionar outro
          </button>
        )}
        <Input
          placeholder="CEP"
          inputName="clientCep"
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
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
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
          inputType="number"
        />
        <Input
          placeholder="Complemento"
          inputName="clientAddressComplement"
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
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
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
          inputType="text"
        />
        <Input
          placeholder="Estado"
          inputName="clientState"
          className="w-[calc(50%-0.25rem)] min-h-[4rem]"
          inputType="text"
        />
      </div>
    </div>
  );
};

export default ClientInfoForm;
