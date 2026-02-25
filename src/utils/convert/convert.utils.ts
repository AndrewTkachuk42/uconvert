import { Units } from "../../constants/common/common.constants";
import {
  UNIT_DIMENSION,
  UNIT_TO_CANONICAL,
} from "../../constants/conversion/conversion.constants";
import strings from "../../constants/strings/strings";
import { round } from "../math/math";
import { formatMessage } from "../strings/strings.utils";
import { ConvertOptions } from "./convert.types";

const throwConversionError = ({ fromUnits, toUnits }: ConvertOptions) => {
  const fromDim = UNIT_DIMENSION[fromUnits];
  const toDim = UNIT_DIMENSION[toUnits];

  throw new Error(
    formatMessage(
      strings.convertDimensionMismatch,
      fromUnits,
      fromDim,
      toUnits,
      toDim,
    ),
  );
};

const getFactor = (fromUnits: Units, toUnits: Units) => {
  if (fromUnits === toUnits) return 1;

  const toCanonicalFrom = UNIT_TO_CANONICAL[fromUnits];
  const toCanonicalTo = UNIT_TO_CANONICAL[toUnits];
  return toCanonicalFrom / toCanonicalTo;
};

const ensureSameDimension = ({ fromUnits, toUnits }: ConvertOptions) => {
  const fromDim = UNIT_DIMENSION[fromUnits];
  const toDim = UNIT_DIMENSION[toUnits];

  if (fromDim !== toDim) throwConversionError({ fromUnits, toUnits });
};

const convertDefault = (
  value: number,
  { fromUnits, toUnits, roundTo }: ConvertOptions,
): number => {
  const factor = getFactor(fromUnits, toUnits);

  return round(value * factor, roundTo);
};

const convertUtils = {
  convertDefault,
  ensureSameDimension,
};

export default convertUtils;
