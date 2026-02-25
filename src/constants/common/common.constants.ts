export enum UnitSystem {
  METRIC = "Si",
  IMPERIAL = "Imperial",
}

export enum Dimension {
  LENGTH = "length",
  WEIGHT = "weight",
  SPEED = "speed",
}

export enum MetricUnits {
  MM = "mm",
  CM = "cm",
  M = "m",
  KM = "km",
  G = "g",
  KG = "kg",
  TONNE = "t",
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
  FT_S = "ft/s",
  MPH = "mph",
}

export type Units = MetricUnits | ImperialUnits;
