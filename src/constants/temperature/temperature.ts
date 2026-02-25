import {
  ImperialUnits,
  MetricUnits,
  TemperatureUnits,
} from "../common/common.constants";

/** Temperature: value in Kelvin = value * scale + offset */
export const TEMPERATURE_TO_KELVIN_SCALE: Record<TemperatureUnits, number> = {
  [MetricUnits.CELSIUS]: 1,
  [MetricUnits.KELVIN]: 1,
  [ImperialUnits.FAHRENHEIT]: 5 / 9,
};
export const TEMPERATURE_TO_KELVIN_OFFSET: Record<TemperatureUnits, number> = {
  [MetricUnits.CELSIUS]: 273.15,
  [MetricUnits.KELVIN]: 0,
  [ImperialUnits.FAHRENHEIT]: 273.15 - (32 * 5) / 9,
};

/** Temperature: value in unit = value_K * scale + offset */
export const TEMPERATURE_FROM_KELVIN_SCALE: Record<TemperatureUnits, number> = {
  [MetricUnits.CELSIUS]: 1,
  [MetricUnits.KELVIN]: 1,
  [ImperialUnits.FAHRENHEIT]: 9 / 5,
};

export const TEMPERATURE_FROM_KELVIN_OFFSET: Record<TemperatureUnits, number> =
  {
    [MetricUnits.CELSIUS]: -273.15,
    [MetricUnits.KELVIN]: 0,
    [ImperialUnits.FAHRENHEIT]: -459.67,
  };
