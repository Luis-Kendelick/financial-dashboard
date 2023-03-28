export const formatarTelefone = (digitedPhone: string) => {
    // Remove tudo que não for dígito
  const digitos = digitedPhone.replace(/[^\d]/g, '');

  // Formatação da máscara
  let telefoneFormatado = '';
  if (digitos.length >= 2) {
    telefoneFormatado += `(${digitos.slice(0, 2)}`;
  } else if (digitos.length > 0) {
    telefoneFormatado += `(${digitos}`;
  }

  if (digitos.length > 2 && digitos.length < 7) {
    telefoneFormatado += `) ${digitos.slice(2)}`;
  } else if (digitos.length >= 7) {
    telefoneFormatado += `) ${digitos.slice(2, 7)}-${digitos.slice(7, 11)}`;
  } else if (digitos.length > 2) {
    telefoneFormatado += `) ${digitos.slice(2)}`;
  }

  return telefoneFormatado;
  }