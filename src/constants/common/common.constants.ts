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
  KG = "kg",
  KM_H = "km/h",
}

export enum ImperialUnits {
  IN = "in",
  FT = "ft",
  YD = "yd",
  MI = "mi",
  LB = "lb",
  MPH = "mph",
}

export type Units = MetricUnits | ImperialUnits;
