import { round } from "../math/math";
import { ConvertOptions } from "./convert.types";
import utils from "./convert.utils";

const { getFactor } = utils;

export const convert = (
  value: number,
  { fromUnits, toUnits, roundTo }: ConvertOptions,
) => {
  const factor = getFactor(fromUnits, toUnits);

  return round(value * factor, roundTo);
};
