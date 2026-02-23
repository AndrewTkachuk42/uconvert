import { round } from "./math";

describe("round", () => {
  it("returns value unchanged when decimalPlaces is undefined", () => {
    expect(round(3.14159)).toBe(3.14159);
    expect(round(100)).toBe(100);
    expect(round(0)).toBe(0);
  });

  it("rounds to integer when decimalPlaces is 0", () => {
    expect(round(3.7, 0)).toBe(4);
    expect(round(3.4, 0)).toBe(3);
    expect(round(3.5, 0)).toBe(4);
    expect(round(-2.5, 0)).toBe(-3);
    expect(round(-2.6, 0)).toBe(-3);
  });

  it("rounds to one decimal place", () => {
    expect(round(3.14159, 1)).toBe(3.1);
    expect(round(3.16, 1)).toBe(3.2);
    expect(round(3.25, 1)).toBe(3.3);
  });

  it("rounds to two decimal places", () => {
    expect(round(3.14159, 2)).toBe(3.14);
    expect(round(3.146, 2)).toBe(3.15);
    expect(round(2.204622, 2)).toBe(2.2);
  });

  it("rounds to more decimal places", () => {
    expect(round(3.14159265359, 4)).toBe(3.1416);
    expect(round(1.2346, 3)).toBe(1.235);
  });

  it("pads with zeros when value has fewer decimal places", () => {
    expect(round(3.1, 2)).toBe(3.1);
    expect(round(5, 2)).toBe(5);
  });

  it("handles negative values", () => {
    expect(round(-3.14159, 2)).toBe(-3.14);
    expect(round(-0.5, 0)).toBe(-1);
  });

  it("handles zero", () => {
    expect(round(0, 2)).toBe(0);
    expect(round(0, 0)).toBe(0);
  });
});
