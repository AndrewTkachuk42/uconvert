import {
  Dimension,
  ImperialUnits,
  MetricUnits,
  Units,
} from "../common/common.constants";

/** Factor to multiply value by to get value in canonical unit for that dimension. */
export const UNIT_TO_CANONICAL: Record<Units, number> = {
  [MetricUnits.CM]: 1,
  [MetricUnits.M]: 100,
  [ImperialUnits.IN]: 2.54,
  [ImperialUnits.FT]: 30.48,
  [MetricUnits.KG]: 1,
  [ImperialUnits.LB]: 0.45359237,
  [MetricUnits.KM_H]: 1,
  [ImperialUnits.MPH]: 1.609344,
};

export const UNIT_DIMENSION: Record<Units, Dimension> = {
  [MetricUnits.CM]: Dimension.LENGTH,
  [MetricUnits.M]: Dimension.LENGTH,
  [ImperialUnits.IN]: Dimension.LENGTH,
  [ImperialUnits.FT]: Dimension.LENGTH,
  [MetricUnits.KG]: Dimension.WEIGHT,
  [ImperialUnits.LB]: Dimension.WEIGHT,
  [MetricUnits.KM_H]: Dimension.SPEED,
  [ImperialUnits.MPH]: Dimension.SPEED,
};
