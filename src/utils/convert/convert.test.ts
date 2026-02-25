import {
  ImperialUnits,
  MetricUnits,
} from "../../constants/common/common.constants";
import { convert } from "./convert";

describe("convert", () => {
  it("returns value unchanged when from and to units are the same", () => {
    expect(
      convert(100, {
        fromUnits: MetricUnits.M,
        toUnits: MetricUnits.M,
        roundTo: 2,
      }),
    ).toBe(100);
  });

  it("converts length within metric: m to cm", () => {
    expect(
      convert(1, {
        fromUnits: MetricUnits.M,
        toUnits: MetricUnits.CM,
        roundTo: 2,
      }),
    ).toBe(100);
  });

  it("converts length within metric: cm to m", () => {
    expect(
      convert(250, {
        fromUnits: MetricUnits.CM,
        toUnits: MetricUnits.M,
        roundTo: 2,
      }),
    ).toBe(2.5);
  });

  it("converts length from imperial to metric: in to cm", () => {
    expect(
      convert(10, {
        fromUnits: ImperialUnits.IN,
        toUnits: MetricUnits.CM,
        roundTo: 2,
      }),
    ).toBe(25.4);
  });

  it("converts length from imperial to metric: ft to m", () => {
    // 1 ft = 30.48 cm = 0.3048 m
    expect(
      convert(1, {
        fromUnits: ImperialUnits.FT,
        toUnits: MetricUnits.M,
        roundTo: 4,
      }),
    ).toBe(0.3048);
  });

  it("converts weight: kg to lb", () => {
    expect(
      convert(1, {
        fromUnits: MetricUnits.KG,
        toUnits: ImperialUnits.LB,
        roundTo: 4,
      }),
    ).toBe(2.2046);
  });

  it("converts weight: lb to kg", () => {
    expect(
      convert(10, {
        fromUnits: ImperialUnits.LB,
        toUnits: MetricUnits.KG,
        roundTo: 2,
      }),
    ).toBe(4.54);
  });

  it("converts speed: km/h to mph", () => {
    expect(
      convert(100, {
        fromUnits: MetricUnits.KM_H,
        toUnits: ImperialUnits.MPH,
        roundTo: 2,
      }),
    ).toBe(62.14);
  });

  it("converts speed: mph to km/h", () => {
    expect(
      convert(62.14, {
        fromUnits: ImperialUnits.MPH,
        toUnits: MetricUnits.KM_H,
        roundTo: 2,
      }),
    ).toBe(100);
  });

  it("applies roundTo decimal places", () => {
    expect(
      convert(1, {
        fromUnits: MetricUnits.KG,
        toUnits: ImperialUnits.LB,
        roundTo: 0,
      }),
    ).toBe(2);
    expect(
      convert(1, {
        fromUnits: MetricUnits.KG,
        toUnits: ImperialUnits.LB,
        roundTo: 2,
      }),
    ).toBe(2.2);
  });

  it("throws when converting between different dimensions", () => {
    expect(() =>
      convert(1, {
        fromUnits: MetricUnits.M,
        toUnits: MetricUnits.KG,
        roundTo: 2,
      }),
    ).toThrow();
  });

  it("returns value unchanged when temperature from and to are the same", () => {
    expect(
      convert(25, {
        fromUnits: MetricUnits.CELSIUS,
        toUnits: MetricUnits.CELSIUS,
        roundTo: 2,
      }),
    ).toBe(25);
  });

  it("converts temperature: Celsius to Fahrenheit", () => {
    expect(
      convert(0, {
        fromUnits: MetricUnits.CELSIUS,
        toUnits: ImperialUnits.FAHRENHEIT,
        roundTo: 2,
      }),
    ).toBe(32);
    expect(
      convert(100, {
        fromUnits: MetricUnits.CELSIUS,
        toUnits: ImperialUnits.FAHRENHEIT,
        roundTo: 2,
      }),
    ).toBe(212);
  });

  it("converts temperature: Fahrenheit to Celsius", () => {
    expect(
      convert(32, {
        fromUnits: ImperialUnits.FAHRENHEIT,
        toUnits: MetricUnits.CELSIUS,
        roundTo: 2,
      }),
    ).toBe(0);
  });

  it("converts temperature: Celsius to Kelvin", () => {
    expect(
      convert(0, {
        fromUnits: MetricUnits.CELSIUS,
        toUnits: MetricUnits.KELVIN,
        roundTo: 2,
      }),
    ).toBe(273.15);
  });

  it("converts temperature: Kelvin to Celsius", () => {
    expect(
      convert(273.15, {
        fromUnits: MetricUnits.KELVIN,
        toUnits: MetricUnits.CELSIUS,
        roundTo: 2,
      }),
    ).toBe(0);
  });

  it("converts temperature: Fahrenheit to Kelvin", () => {
    expect(
      convert(32, {
        fromUnits: ImperialUnits.FAHRENHEIT,
        toUnits: MetricUnits.KELVIN,
        roundTo: 2,
      }),
    ).toBe(273.15);
  });

  it("applies roundTo for temperature", () => {
    expect(
      convert(37.5, {
        fromUnits: MetricUnits.CELSIUS,
        toUnits: ImperialUnits.FAHRENHEIT,
        roundTo: 1,
      }),
    ).toBe(99.5);
  });

  it("throws when converting temperature to non-temperature dimension", () => {
    expect(() =>
      convert(100, {
        fromUnits: MetricUnits.CELSIUS,
        toUnits: MetricUnits.M,
        roundTo: 2,
      }),
    ).toThrow();
  });
});
