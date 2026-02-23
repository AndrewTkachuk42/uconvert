import { MetricUnits } from "../../constants/common/common.constants";
import { convert } from "./convert";

describe("convert", () => {
  it("returns value when from and to units are the same", () => {
    expect(convert(100, { fromUnits: MetricUnits.M, toUnits: MetricUnits.M, roundTo: 2 })).toBe(100);
  });
});
