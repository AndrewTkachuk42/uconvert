import {
  Dimension,
  TemperatureUnits,
} from "../../constants/common/common.constants";
import { UNIT_DIMENSION } from "../../constants/conversion/conversion.constants";
import {
  TEMPERATURE_FROM_KELVIN_OFFSET,
  TEMPERATURE_FROM_KELVIN_SCALE,
  TEMPERATURE_TO_KELVIN_OFFSET,
  TEMPERATURE_TO_KELVIN_SCALE,
} from "../../constants/temperature/temperature";
import { ConvertOptions } from "../convert/convert.types";
import { round } from "../math/math";

const isTemperature = ({ fromUnits }: ConvertOptions): boolean =>
  UNIT_DIMENSION[fromUnits] === Dimension.TEMPERATURE;

const toKelvin = (value: number, units: TemperatureUnits): number =>
  value * TEMPERATURE_TO_KELVIN_SCALE[units] +
  TEMPERATURE_TO_KELVIN_OFFSET[units];

const fromKelvin = (value: number, units: TemperatureUnits): number =>
  value * TEMPERATURE_FROM_KELVIN_SCALE[units] +
  TEMPERATURE_FROM_KELVIN_OFFSET[units];

const convertTemperature = (
  value: number,
  { fromUnits, toUnits, roundTo }: ConvertOptions,
): number => {
  if (fromUnits === toUnits) return round(value, roundTo);

  const valueInKelvin = toKelvin(value, fromUnits as TemperatureUnits);

  const result = fromKelvin(valueInKelvin, toUnits as TemperatureUnits);

  return round(result, roundTo);
};

const temperatureUtils = {
  isTemperature,
  convertTemperature,
};

export default temperatureUtils;
