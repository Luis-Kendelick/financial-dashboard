export const cellphoneFormatter = (digitedPhone: string) => {
  return digitedPhone
    .replace(/\D/g, "")
    .replace(/^(\d)/, "($1")
    .replace(/^(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d{1,5})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};
export const telFormatter = (digitedPhone: string) => {
  return digitedPhone
    .replace(/\D/g, "")
    .replace(/^(\d)/, "($1")
    .replace(/^(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{4})(\d{1,5})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};
export const cepFormatter = (digitedCep: string) => {
  return digitedCep
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d{1,5})/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};
