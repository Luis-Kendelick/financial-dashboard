import Filter from "components/common/Filter";
import Icon from "components/common/Icon";
import React, { useEffect, useRef } from "react";
import { ReactComponent as PlusIcon } from "assets/icons/ic-plus.svg";
import { ReactComponent as ArrowDownIcon } from "assets/icons/ic-arrow-down.svg";
import ClientListItem from "components/common/ClientListItem";
import ListHeader from "./ListHeader";
import { NavLink } from "react-router-dom";
import { clientList } from "mocks/Clients";
import {
  changeClientsPerPage,
  decrementPage,
  incrementPage,
  storeClientsList,
} from "reducks/features/clients/clientsSlice";
import { useAppDispatch, useAppSelector } from "reducks/app/redux-hooks";
import useOnClickOutside from "hooks/useOnClickOutside";

const Clients: React.FC = () => {
  const [isClientsPerPageInputOpened, setClientsPerPageInputOpened] =
    React.useState(false);
    
  const clientFilterOptions = [
    { label: "Nome", value: "name" },
    { label: "Email", value: "email" },
    { label: "Telefone", value: "phone" },
    { label: "Status", value: "status" },
  ];

  const clientsPerPageOptions = [
    {
      label: "10",
      value: 10,
    },
    {
      label: "15",
      value: 15,
    },
  ];

  const dispatch = useAppDispatch();
  const { total_clients, per_page, current_page, client_list } = useAppSelector(
    (state) => state.reducer.clientsSlice
  );

  const fetchAndStoreClientsList = () => dispatch(storeClientsList(clientList));

  useEffect(() => {
    fetchAndStoreClientsList();
  }, []);

  const handleChangeClientsPerPage = (value: number) => {
    dispatch(changeClientsPerPage(value));
  };

  const clientsPerPageInputRef = useRef(null);

  useOnClickOutside(clientsPerPageInputRef, () =>
    setClientsPerPageInputOpened(false)
  );

  const setInitialAndFinalClientOnPage = () => {
    const initialClient = current_page * per_page - per_page;
    const finalClient = current_page * per_page;
    const clientsOnPage = client_list.slice(initialClient, finalClient);
    return clientsOnPage;
  };

  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <div className="flex justify-between">
        <Filter
          onSelectOption={() => console.log("select")}
          selectedOption={{ label: "Nome", value: "name" }}
          options={clientFilterOptions}
        />
        <NavLink
          to={"/add-new-client"}
          className={
            "bg-blue-violet hover:bg-blue-violet-2 px-5 rounded-cards flex items-center"
          }
        >
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
        {setInitialAndFinalClientOnPage().map((client, index) => (
          <ClientListItem
            clientPosition={index}
            name={client.name}
            email={client.email}
            phone={client.phone}
            status={client.status}
          />
        ))}
        <div className="flex items-center justify-start pl-4 relative">
          <p className="text-black-38 font-inter font-medium text-sm">
            Itens por página:
          </p>
          <button
            type="button"
            onClick={() => setClientsPerPageInputOpened(true)}
            className="bg-transparent rounded-cards text-black-60 font-inter font-medium text-base flex items-center h-full pl-2"
          >
            {per_page}{" "}
            <Icon IconComponent={ArrowDownIcon} className="fill-black-60" />
          </button>
          {isClientsPerPageInputOpened && (
            <div
              className="origin-top-right absolute left-32 bottom-10 w-max rounded-cards shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="filter-options"
              id="filter-options-menu"
              ref={clientsPerPageInputRef}
            >
              <div className="py-1" role="none">
                {clientsPerPageOptions.map((option) => (
                  <button
                    key={option.label}
                    className={`text-black-87 block px-4 py-2 text-sm leading-5 text-left w-full hover:bg-gray-100`}
                    role="menuitem"
                    onClick={() => {
                      setClientsPerPageInputOpened(false);
                      handleChangeClientsPerPage(option.value);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          <p className="text-black-38 font-inter font-medium text-sm ml-2">
            {per_page * current_page} de {total_clients}
          </p>
          <div className="flex items-center absolute right-[50%] w-32 h-full">
            <button
              onClick={() => dispatch(decrementPage())}
              type="button"
              className="bg-transparent rounded-cards w-1/6 text-black-60 font-inter font-medium text-base flex items-center h-full"
            >
              <Icon
                IconComponent={ArrowDownIcon}
                className="fill-black-60 transform rotate-90 scale-150"
              />
            </button>

            <input
              type="text"
              placeholder={`${current_page}`}
              className="text-neutral-500 h-4/6 w-16 rounded-md centered-placeholder text-center mx-3 bg-white-two border"
            />

            <button
              onClick={() => dispatch(incrementPage())}
              type="button"
              className="bg-transparent rounded-cards w-1/6 text-black-60 font-inter font-medium text-base flex items-center h-full -ml-[1px]"
            >
              <Icon
                IconComponent={ArrowDownIcon}
                className="fill-black-60 transform scale-150 -rotate-90"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
