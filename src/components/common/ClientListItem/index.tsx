import { IClientListItemProps } from "models/IClient";
import React from "react";
import Badge from "../Badge";
import Icon from "../Icon";
import {ReactComponent as TrashIcon} from "@/assets/icons/ic-trash-can.svg";
import { eraseClients } from "reducks/features/clients/clientsSlice";
import { useAppDispatch } from "reducks/app/redux-hooks";

interface IComponentProps extends IClientListItemProps {
  clientPosition: number;
}

const ClientListItem: React.FC<IComponentProps> = ({
  name,
  email,
  phone,
  status,
  clientPosition
}) => {
  // TODO: criar remoção de vários clientes
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-[repeat(18,_minmax(0,_1fr))] px-4 border-b-[1px] border-neutral-200 border-solid items-center">
      <div className="w-4 aspect-square border-[2.5px] border-black-38 border-solid rounded-cards cursor-pointer col-span-1" onClick={() => console.log(clientPosition)} />
      <p className="text-black-87 tracking-wider font-inter font-bold text-xs col-span-5 flex items-center">
        {name}
      </p>
      <Badge text={status} className={`col-span-3 ${status.toLocaleLowerCase() === 'cliente' ? 'text-bright-blue bg-ice-blue' : 'text-brownish-gray-two bg-white-three'}`} />
      <p className="text-black-87 tracking-wider font-inter font-bold text-xs col-span-4 flex items-center">
        {phone}
      </p>
      <p className="text-black-87 tracking-wider font-inter font-bold text-xs col-span-4 flex items-center">
        {email}
      </p>
      <button type="button" onClick={() => dispatch(eraseClients([clientPosition]))} className="absolute right-16 cursor-pointer hover:bg-red-300 h-8 w-8 flex items-center justify-center rounded-cards">
        <Icon IconComponent={TrashIcon} className=""/>
      </button>
    </div>
  );
};

export default ClientListItem;
