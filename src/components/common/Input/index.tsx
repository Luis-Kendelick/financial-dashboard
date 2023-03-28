import React from "react";
import {
  FieldValues,
  RegisterOptions,
  useForm,
  useFormContext,
} from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";
import { formatarTelefone } from "utils/PhoneFormatter";
import { IInputProps } from "models/IInput";

const Input: React.FC<IInputProps> = ({
  placeholder,
  inputName,
  className,
  width,
  registerOptions,
  insideInputHasBorder = true,
  isPhoneInput = false,
}) => {
  const formContext = useFormContext();
  const {
    register,
    formState: { errors },
    trigger,
  } = formContext;

  const handlePhoneMask = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const valorAntigo = input.value;
    console.log("🚀 ~ file: index.tsx:41 ~ handlePhoneMask ~ valorAntigo:", valorAntigo)
    const cursorPos = input.selectionStart ?? 0;
  
    // Verifica se a tecla pressionada foi o backspace e se o valorNovo atualizado
    // ainda contém o traço na posição anterior ao cursor
    if (
      event.type === "deleteContentBackward" &&
      valorAntigo[cursorPos - 1] === "-"
    ) {
      return;
    }
  
    // Atualiza o valor formatado com base no valor atual do input
    const valorNovo = input.value;
    console.log("🚀 ~ file: index.tsx:55 ~ handlePhoneMask ~ valorNovo:", valorNovo)
    const telefoneFormatado = formatarTelefone(valorNovo);
    console.log("🚀 ~ file: index.tsx:57 ~ handlePhoneMask ~ telefoneFormatado:", telefoneFormatado)
  
    event.currentTarget.value = telefoneFormatado;
  
    // Calcula a nova posição do cursor após a formatação
    let newCursorPos = cursorPos;
    if (valorNovo.length > valorAntigo.length) {
      const diff = telefoneFormatado.length - valorAntigo.length;
      newCursorPos += diff;
    } else if (valorNovo.length < valorAntigo.length) {
      const diff = valorAntigo.length - telefoneFormatado.length;
      newCursorPos -= diff;
  
      // Permite a remoção do traço com as teclas de backspace e delete
      if (
        event.type === "deleteContentBackward" ||
        (event.key === "Backspace" && valorAntigo[cursorPos] === "-")
      ) {
        input.value =
          telefoneFormatado.substring(0, cursorPos - 1) +
          telefoneFormatado.substring(cursorPos);
        newCursorPos--;
      }
    }
  
    // Reposiciona o cursor após a formatação
    if (newCursorPos !== cursorPos && newCursorPos >= 0) {
      input.setSelectionRange(
        Math.min(newCursorPos, telefoneFormatado.length),
        Math.min(newCursorPos, telefoneFormatado.length)
      );
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
              isPhoneInput && handlePhoneMask(e);
            },
            ...registerOptions,
          })}
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
