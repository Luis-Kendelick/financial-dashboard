import { FieldValues, RegisterOptions } from "react-hook-form";

export interface IInputProps extends IBasicInputProps {
    registerOptions?: RegisterOptions<FieldValues>;
    insideInputHasBorder?: boolean;
    isPhoneInput?: boolean;
}

export interface IBasicInputProps {
    placeholder: string;
    inputName: string;
    className?: string;
    width?: string;
  }