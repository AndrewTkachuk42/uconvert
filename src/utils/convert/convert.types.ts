import { Units } from "../../constants/common/common.constants";

export interface ConvertOptions {
  fromUnits: Units;
  toUnits: Units;
  roundTo?: number;
}
