import { FeetInches } from "./height.types";

const parseFeetInches = (input: string): FeetInches => {
  // NOTE: this function is AI generated, but it's well tested and works as expected. And it's covered by unit tests.
  if (typeof input !== "string") return [0, 0];

  const normalized = input
    .toLowerCase()
    .replace(/[""]/g, "in")
    .replace(/[''′]+/g, "ft")
    .replace(/(feet|foot)/g, "ft")
    .replace(/(inches|inch)/g, "in")
    .replace(/[\s]+/g, " ")
    .trim();

  const parseNumber = (value: string | undefined): number =>
    parseFloat(value || "0");

  const ftMatch = normalized.match(/([\d.]+)\s*ft/);
  const inMatch = normalized.match(/([\d.]+)\s*in/);

  const feet = parseNumber(ftMatch?.[1]);
  const inches = parseNumber(inMatch?.[1]);

  if (ftMatch && inMatch) {
    return [feet, inches];
  }

  const [firstNumberString, secondNumberString] = normalized.match(
    /[\d.]+/g,
  ) || ["0", "0"];

  const firstNumber = parseNumber(firstNumberString);
  const secondNumber = parseNumber(secondNumberString);

  if (!ftMatch && !inMatch) {
    return [firstNumber, secondNumber];
  }

  if (ftMatch && !inMatch) {
    return [feet, secondNumber];
  }

  if (!ftMatch && inMatch) {
    return [0, inches];
  }

  return [0, 0];
};

const heightUtils = {
  parseFeetInches,
};

export default heightUtils;
