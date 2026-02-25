export enum UnitSystem {
  METRIC = "Si",
  IMPERIAL = "Imperial",
}

export enum Dimension {
  LENGTH = "length",
  WEIGHT = "weight",
  SPEED = "speed",
  TEMPERATURE = "temperature",
}

export enum MetricUnits {
  MM = "mm",
  CM = "cm",
  M = "m",
  KM = "km",
  G = "g",
  KG = "kg",
  TONNE = "t",
  CELSIUS = "C",
  KELVIN = "K",
  M_S = "m/s",
  KM_H = "km/h",
}

export enum ImperialUnits {
  IN = "in",
  FT = "ft",
  YD = "yd",
  MI = "mi",
  OZ = "oz",
  LB = "lb",
  ST = "st",
  FAHRENHEIT = "F",
  FT_S = "ft/s",
  MPH = "mph",
}

export type Units = MetricUnits | ImperialUnits;

export type TemperatureUnits =
  | MetricUnits.CELSIUS
  | MetricUnits.KELVIN
  | ImperialUnits.FAHRENHEIT;
