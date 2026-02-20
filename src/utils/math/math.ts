export const round = (value: number, decimalPlaces?: number) => {
  if (decimalPlaces === undefined) return value;

  return parseFloat(value.toFixed(decimalPlaces));
};
