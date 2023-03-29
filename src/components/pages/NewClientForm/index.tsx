import Input from "components/common/Input";
import React from "react";
import { NavLink } from "react-router-dom";
import ClientInfoForm from "./components/ClientInfoForm";
import { FormProvider, useForm } from "react-hook-form";

// import { Container } from './styles';

const NewClientForm: React.FC = () => {
  const [selectedFormTab, setSelectedFormTab] = React.useState(0);

  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col w-full h-full">
        {/* <div > */}
          <h1 className="w-full h-[5%] text-black-87 tracking-wide font-inter font-medium text-xl">
            Adicionar cliente
          </h1>
          <div className="w-full h-[95%] bg-white-two flex flex-col justify-between border-[1px] border-neutral-300 border-solid rounded-cards">
            {/* //HEADER */}
            <div className="w-full h-[8%] flex">
              <div
                className={`h-full w-1/3 flex items-center justify-center cursor-pointer hover:bg-neutral-200 ${
                  selectedFormTab === 0
                    ? "border-b-2 border-blue-violet text-blue-violet"
                    : "text-black-38"
                }`}
                onClick={() => setSelectedFormTab(0)}
              >
                <p className="font-inter font-medium text-base">
                  DADOS DO CLIENTE
                </p>
              </div>
              <div
                className={`h-full w-1/3 flex items-center justify-center cursor-pointer hover:bg-neutral-200 ${
                  selectedFormTab === 1
                    ? "border-b-2 border-blue-violet text-blue-violet"
                    : "text-black-38"
                }`}
                onClick={() => setSelectedFormTab(1)}
              >
                <p className="font-inter font-medium text-base">
                  DADOS DO VEÍCULO
                </p>
              </div>
              <div
                className={`h-full w-1/3 flex items-center justify-center cursor-pointer hover:bg-neutral-200 ${
                  selectedFormTab === 2
                    ? "border-b-2 border-blue-violet text-blue-violet"
                    : "text-black-38"
                }`}
                onClick={() => setSelectedFormTab(2)}
              >
                <p className="font-inter font-medium text-base">
                  INTENÇÃO DE COMPRA
                </p>
              </div>
            </div>
            {/* BODY */}
            {selectedFormTab === 0 && <ClientInfoForm />}
            {/* FOOTER */}
            <div className="h-[8%] w-full min-h-[5.5rem] gap-x-5 pl-5 py-5 bg-ice-blue border-t-[1px] border-neutral-300 border-solid rounded-cards flex items-center">
              <button
                type="submit"
                form="client-form"
                className={
                  "bg-blue-violet hover:bg-blue-violet-2 px-5 rounded-cards flex items-center h-full w-40"
                }
              >
                <p className="text-white-two font-inter font-medium text-sm w-full text-center">
                  SALVAR
                </p>
              </button>
              <NavLink
                to={"/clients"}
                className={
                  "hover:bg-neutral-200 px-5 rounded-cards flex items-center h-full w-40"
                }
              >
                <p className="text-blue-violet font-inter font-medium text-sm w-full text-center">
                  CANCELAR
                </p>
              </NavLink>
            </div>
          </div>
        {/* </div> */}
      </form>
    </FormProvider>
  );
};

export default NewClientForm;
