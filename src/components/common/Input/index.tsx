import React from "react";
import {
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";
import { IInputProps } from "models/IInput";
import {
  cellphoneFormatter,
  cepFormatter,
  telFormatter,
} from "utils/inputFormatters";
import { handleKeyPressForNumberInputs, handleRegisterOptions } from "./utils";

const Input: React.FC<IInputProps> = ({
  placeholder,
  inputName,
  className,
  width,
  insideInputHasBorder = true,
  inputType,
}) => {
  const formContext = useFormContext();
  const {
    register,
    formState: { errors },
    trigger,
  } = formContext;

  const handleInputMasks = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputType === "cellphone") {
      event.currentTarget.value = cellphoneFormatter(event.currentTarget.value);
    }
    if (inputType === "tel") {
      event.currentTarget.value = telFormatter(event.currentTarget.value);
    }
    if (inputType === "cep") {
      event.currentTarget.value = cepFormatter(event.currentTarget.value);
    }
  };

  return (
    <>
      <div
        className={`${
          errors[inputName]?.message
            ? "border-[1px] border-solid border-red-600"
            : insideInputHasBorder
            ? "border-[1px] border-solid border-neutral-300"
            : "border-0"
        } ${className ?? ""} h-full w-full ${
          width ? ` w-[${width}]` : ""
        } flex flex-col justify-center rounded-cards bg-white-two relative`}
      >
        <input
          {...register(inputName, {
            onBlur: () => {
              trigger(inputName);
            },
            onChange: (e) => {
              trigger(inputName);
              handleInputMasks(e);
            },
            ...handleRegisterOptions(inputType ?? 'text'),
          })}
          onKeyDown={(e) => {
            handleKeyPressForNumberInputs(e, inputType ?? 'text');
          }}
          className={`pl-4 mr-1 placeholder:font-inter h-full placeholder:font-medium placeholder:text-base placeholder:text-neutral-400 text-black-87 font-inter font-medium tracking-wide bg-white-two rounded-card focus:outline-none rounded-cards`}
          placeholder={placeholder}
        />
        {errors[inputName]?.message && (
          <ErrorMessage
            name={inputName}
            render={({ message }) => (
              <p className="h-5 w-full text-red-600 absolute bottom-0 pl-4 text-xs">
                {message}
              </p>
            )}
          />
        )}
      </div>
    </>
  );
};

export default Input;
