export enum UnitSystem {
  METRIC = "Si",
  IMPERIAL = "Imperial",
}

export enum Dimension {
  LENGTH = "length",
  WEIGHT = "weight",
  SPEED = "speed",
}

export enum MeasurementType {
  LENGTH = "length",
  WEIGHT = "weight",
  SPEED = "speed",
  HEIGHT = "height",
  LENGTH_FEET = "length_feet",
}

export enum MetricUnits {
  CM = "cm",
  M = "m",
  KG = "kg",
  KM_H = "km/h",
}

export enum ImperialUnits {
  IN = "in",
  FT = "ft",
  LB = "lb",
  MPH = "mph",
}

export type Units = MetricUnits | ImperialUnits;
