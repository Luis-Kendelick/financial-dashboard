import Filter from "components/common/Filter";
import Icon from "components/common/Icon";
import React from "react";
import { ReactComponent as PlusIcon } from "assets/icons/ic-plus.svg";
import { ReactComponent as ArrowDownIcon } from "assets/icons/ic-arrow-down.svg";
import ClientListItem from "components/common/ClientListItem";
import ListHeader from "./ListHeader";
import { NavLink } from "react-router-dom";

const Clients: React.FC = () => {
  const clientFilterOptions = [
    { label: "Nome", value: "name" },
    { label: "Email", value: "email" },
    { label: "Telefone", value: "phone" },
    { label: "Status", value: "status" },
  ];

  const clientList = [
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Cliente",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Cliente",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Cliente",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
    {
      name: "João da Silva",
      email: "",
      phone: "(11) 99999-9999",
      status: "Lead",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <div className="flex justify-between">
        <Filter
          onSelectOption={() => console.log("select")}
          selectedOption={{ label: "Nome", value: "name" }}
          options={clientFilterOptions}
        />
        <NavLink to={'/add-new-client'} className={'bg-blue-violet hover:bg-blue-violet-2 px-5 rounded-cards flex items-center'}>
            <Icon
              IconComponent={PlusIcon}
              className="h-full w-4 fill-white-two flex"
            />
            <p className="text-white-two font-inter font-medium text-sm ml-2">
              ADICIONAR
            </p>
        </NavLink>
      </div>
      <div className="bg-white-two w-full h-full rounded-cards border-[1px] border-neutral-200 border-solid grid grid-flow-row auto-rows-fr">
        <ListHeader />
        {clientList.slice(0, 10).map((client) => (
          <ClientListItem
            name={client.name}
            email={client.email}
            phone={client.phone}
            status={client.status}
          />
        ))}
        <div className="flex items-center justify-start pl-4">
          <p className="text-black-38 font-inter font-medium text-sm">
            Itens por página:
          </p>
          <button className="bg-transparent rounded-cards text-black-60 font-inter font-medium text-base flex items-center h-full pl-2">
            10 <Icon IconComponent={ArrowDownIcon} className="fill-black-60" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
