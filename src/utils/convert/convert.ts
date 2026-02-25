import temperatureUtils from "../temperature/temperature.utils";
import { ConvertOptions } from "./convert.types";
import utils from "./convert.utils";

const { convertDefault, ensureSameDimension } = utils;
const { isTemperature, convertTemperature } = temperatureUtils;

export const convert = (value: number, options: ConvertOptions) => {
  ensureSameDimension(options);

  if (isTemperature(options)) {
    return convertTemperature(value, options);
  }

  return convertDefault(value, options);
};
