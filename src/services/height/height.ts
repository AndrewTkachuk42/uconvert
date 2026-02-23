import {
  ImperialUnits,
  MetricUnits,
} from "../../constants/common/common.constants";
import { convert } from "../../utils/convert/convert";
import { round } from "../../utils/math/math";
import constants from "./height.constants";
import { FeetInches } from "./height.types";
import utils from "./height.utils";

const { parseFeetInches } = utils;
const { inchesPerFoot } = constants;

class Height {
  toFeetInches(valueInCm: number, roundTo?: number): FeetInches {
    const totalInches = convert(valueInCm, {
      fromUnits: MetricUnits.CM,
      toUnits: ImperialUnits.IN,
      roundTo,
    });

    const feet = Math.floor(totalInches / inchesPerFoot);
    const inches = round(totalInches - feet * inchesPerFoot, roundTo);

    return [feet, inches];
  }

  toCentimeters([feet, inches]: FeetInches): number {
    const totalInches = feet * inchesPerFoot + inches;

    return convert(totalInches, {
      fromUnits: ImperialUnits.IN,
      toUnits: MetricUnits.CM,
    });
  }

  parseFeetInches(input: string): FeetInches {
    return parseFeetInches(input);
  }
}

const height = new Height();

export default height;
