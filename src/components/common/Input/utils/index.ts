import { InputTypes } from "models/IInput";
import React from "react";
import { RegisterOptions } from "react-hook-form";
import { EmailValidationRegex, NameValidationRegex } from "utils/RegexPatterns";

export const handleKeyPressForNumberInputs = (
  event: React.KeyboardEvent<HTMLInputElement>,
  inputType: InputTypes
) => {
  const commonConditions =
    event.key !== "Backspace" &&
    event.key !== "Delete" &&
    event.key !== "Tab" &&
    event.key !== "ArrowLeft" &&
    event.key !== "ArrowRight";

  if (
    inputType === "cellphone" &&
    event.currentTarget.value.length === 15 &&
    commonConditions
  ) {
    event.preventDefault();
  } else if (
    inputType === "tel" &&
    event.currentTarget.value.length === 14 &&
    commonConditions
  ) {
    event.preventDefault();
  } else if (
    inputType === "cep" &&
    event.currentTarget.value.length === 9 &&
    commonConditions
  ) {
    event.preventDefault();
  }
};

export const handleRegisterOptions = (
  inputType: InputTypes
): RegisterOptions => {
  const fieldIsRequired = {
    required: {
      value: true,
      message: "Campo obrigatório",
    },
  };

  if (inputType === "email") {
    return {
      ...fieldIsRequired,
      pattern: {
        value: EmailValidationRegex,
        message: "E-mail inválido",
      },
    };
  }
  if (inputType === "name") {
    return {
      ...fieldIsRequired,
      pattern: {
        value: NameValidationRegex,
        message: "Comece com letra maiúscula e não use números.",
      },
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres",
      },
      maxLength: {
        value: 20,
        message: "Máximo de 20 caracteres",
      },
    };
  }
  if (inputType === "cellphone") {
    return {
      ...fieldIsRequired,
      minLength: {
        value: 15,
        message: "O número deve ter 11 dígitos.",
      },
    };
  }
  if (inputType === "tel") {
    return {
      required: false,
      minLength: {
        value: 14,
        message: "O número deve ter 10 dígitos.",
      },
    };
  }
  if (inputType === "cep") {
    return {
      ...fieldIsRequired,
      minLength: {
        value: 9,
        message: "O número deve ter 8 dígitos.",
      },
    };
  }
  if (inputType === "number") {
    return {
      ...fieldIsRequired,
      pattern: {
        value: /^[0-9]+$/,
        message: "Digite somente números",
      },
    };
  }
  if (inputType === "address") {
    return {
      ...fieldIsRequired,
      minLength: {
        value: 5,
        message: "Mínimo de 5 caracteres",
      },
      maxLength: {
        value: 50,
        message: "Máximo de 50 caracteres",
      },
    };
  }
  return {
    required: false,
  };
};
