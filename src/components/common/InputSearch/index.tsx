import React from "react";
import { ReactComponent as SearchIcon } from "assets/icons/ic-search.svg";
import Icon from "../Icon";
import Input from "../Input";
import { FormProvider, useForm } from "react-hook-form";
import { IBasicInputProps } from "models/IInput";

const InputSearch: React.FC<IBasicInputProps> = ({
  placeholder,
  inputName,
  className,
  width,
}) => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <div
        className={`${className ?? ""}h-9${
          width ? ` w-[${width}]` : ""
        } flex items-center border-[1px] border-solid border-black-38 rounded-cards bg-white-two`}
      >
        <Input
          placeholder={placeholder}
          inputName={inputName}
          insideInputHasBorder={false}
        />
        <button className="h-full w-10 hover:bg-neutral-300 rounded-cards flex items-center justify-center">
          <Icon IconComponent={SearchIcon} className="fill-black-87" />
        </button>
      </div>
    </FormProvider>
  );
};

export default InputSearch;
