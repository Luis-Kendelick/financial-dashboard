import { FieldValues, RegisterOptions } from "react-hook-form";

export type InputTypes = "text" | "name" | "email" | "number" | "tel" | "cellphone" | "cep" | "address";

export interface IInputProps extends IBasicInputProps {
    registerOptions?: RegisterOptions<FieldValues>;
    insideInputHasBorder?: boolean;
    inputType?: InputTypes;
}

export interface IBasicInputProps {
    placeholder: string;
    inputName: string;
    className?: string;
    width?: string;
  }