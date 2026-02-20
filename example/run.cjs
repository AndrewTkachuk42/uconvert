/**
 * Example: run this to test the library (uses built dist).
 * From project root: npm run example:cjs
 */
const { convert } = require("../dist/index.js");

// convert(value, options) — value first, then { measurementType, toUnitSystem }
console.log(
  "convert(1, length → Imperial) =>",
  convert(1, {
    measurementType: "length",
    toUnitSystem: "Imperial",
  }),
);
console.log(
  "convert(100, length → Metric) =>",
  convert(100, {
    measurementType: "length",
    toUnitSystem: "Si",
  }),
);
