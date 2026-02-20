/**
 * Example: run this to test the library (uses built dist).
 * From project root: npm run example
 */
import { convert, MetricUnits, ImperialUnits, round } from "../dist/index.mjs";

// convert(value, options) — value first, then { fromUnits, toUnits, roundTo? }
console.log(
  "convert(1, cm → in) =>",
  convert(1, { fromUnits: MetricUnits.CM, toUnits: ImperialUnits.IN }),
);
console.log(
  "convert(100, in → cm, roundTo: 0) =>",
  convert(100, {
    fromUnits: ImperialUnits.IN,
    toUnits: MetricUnits.CM,
    roundTo: 0,
  }),
);
console.log(
  "convert(5, ft → cm, roundTo: 1) =>",
  convert(5, {
    fromUnits: ImperialUnits.FT,
    toUnits: MetricUnits.CM,
    roundTo: 1,
  }),
);
console.log(
  "convert(70, kg → lb) =>",
  convert(70, {
    fromUnits: MetricUnits.KG,
    toUnits: ImperialUnits.LB,
    roundTo: 3,
  }),
);
console.log(
  "convert(100, km/h → mph, roundTo: 2) =>",
  convert(100, {
    fromUnits: MetricUnits.KM_H,
    toUnits: ImperialUnits.MPH,
    roundTo: 2,
  }),
);

// round(value, decimalPlaces) — use standalone for any number
console.log("round(12.12312, 0) =>", round(12.12312, 0));
console.log("round(62.137119, 2) =>", round(62.137119, 2));
