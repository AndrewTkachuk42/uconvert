import height from "./height";

const { parseFeetInches, toFeetInches, toCentimeters } = height;

describe("toFeetInches", () => {
  it("converts 0 cm to [0, 0]", () => {
    expect(toFeetInches(0)).toEqual([0, 0]);
  });

  it("converts 30.48 cm (1 ft) to [1, 0]", () => {
    expect(toFeetInches(30.48)).toEqual([1, 0]);
  });

  it("converts 182.88 cm (6 ft) to [6, 0] when rounded", () => {
    const result = toFeetInches(182.88, 0);
    expect(result).toEqual([6, 0]);
  });

  it("converts 175.26 cm to 5 ft 9 in", () => {
    const result = toFeetInches(175.26);
    expect(result[0]).toBe(5);
    expect(result[1]).toBeCloseTo(9, 10);
  });

  it("converts 170.18 cm to 5 ft 7 in", () => {
    expect(toFeetInches(170.18)).toEqual([5, 7]);
  });

  it("applies roundTo to inches remainder", () => {
    expect(toFeetInches(175.26, 0)).toEqual([5, 9]);
    expect(toFeetInches(175.26, 2)).toEqual([5, 9]);
    // 100 cm = 39.37 in → 3 ft 3.37 in
    expect(toFeetInches(100, 2)).toEqual([3, 3.37]);
  });
});

describe("toCentimeters", () => {
  it("converts [0, 0] to 0 cm", () => {
    expect(toCentimeters([0, 0])).toBe(0);
  });

  it("converts [1, 0] (1 ft) to 30.48 cm", () => {
    expect(toCentimeters([1, 0])).toBe(30.48);
  });

  it("converts [6, 0] (6 ft) to 182.88 cm", () => {
    expect(toCentimeters([6, 0])).toBe(182.88);
  });

  it("converts [5, 9] to 175.26 cm", () => {
    expect(toCentimeters([5, 9])).toBe(175.26);
  });

  it("converts [5, 7] to 170.18 cm", () => {
    expect(toCentimeters([5, 7])).toBe(170.18);
  });

  it("converts 5 ft 6 in to 167.64 cm", () => {
    expect(toCentimeters([5, 6])).toBeCloseTo(167.64, 2);
  });
});

describe("parseFeetInches", () => {
  describe("standard formats with explicit units", () => {
    it("should parse feet and inches with ft and in", () => {
      expect(parseFeetInches("5ft 10in")).toEqual([5, 10]);
    });

    it("should parse feet and inches with ' and \"", () => {
      expect(parseFeetInches("5' 10\"")).toEqual([5, 10]);
    });

    it("should parse with words 'feet' and 'inches'", () => {
      expect(parseFeetInches("5 feet 10 inches")).toEqual([5, 10]);
    });

    it("should parse with singular 'foot' and 'inch'", () => {
      expect(parseFeetInches("1 foot 6 inch")).toEqual([1, 6]);
    });

    it("should handle case insensitivity", () => {
      expect(parseFeetInches("5FT 10IN")).toEqual([5, 10]);
      expect(parseFeetInches("5Feet 10Inches")).toEqual([5, 10]);
      expect(parseFeetInches("5Foot 10Inch")).toEqual([5, 10]);
      expect(parseFeetInches("5FOOT 10INCH")).toEqual([5, 10]);
    });

    it("should handle extra spaces", () => {
      expect(parseFeetInches("5   ft   10   in")).toEqual([5, 10]);
    });

    it("should handle no spaces between number and unit", () => {
      expect(parseFeetInches("5ft10in")).toEqual([5, 10]);
    });
  });

  describe("numeric formats without explicit units", () => {
    it("should parse two numbers as feet and inches", () => {
      expect(parseFeetInches("5 10")).toEqual([5, 10]);
    });

    it("should parse single number as feet when no units", () => {
      expect(parseFeetInches("6")).toEqual([6, 0]);
    });

    it("should handle decimal values", () => {
      expect(parseFeetInches("5.5 10.5")).toEqual([5.5, 10.5]);
    });
  });

  describe("special formats", () => {
    it("should parse format like 5'5 (feet with apostrophe and inches)", () => {
      expect(parseFeetInches("5'5")).toEqual([5, 5]);
    });

    it("should handle 5'10 format", () => {
      expect(parseFeetInches("5'10")).toEqual([5, 10]);
    });

    it("should parse feet with ft and additional number as inches", () => {
      expect(parseFeetInches("5ft 10")).toEqual([5, 10]);
    });

    it("should handle feet only with ft unit", () => {
      expect(parseFeetInches("6ft")).toEqual([6, 0]);
    });

    it("should handle inches only with in unit", () => {
      expect(parseFeetInches("72in")).toEqual([0, 72]);
    });
  });

  describe("quote normalization", () => {
    it("should normalize straight quotes to in", () => {
      expect(parseFeetInches("5' 10\"")).toEqual([5, 10]);
    });

    it("should normalize curly quotes", () => {
      expect(parseFeetInches(`5' 10"`)).toEqual([5, 10]);
    });

    it("should normalize multiple apostrophes to ft", () => {
      expect(parseFeetInches("5''")).toEqual([5, 0]);
    });
  });

  describe("edge cases", () => {
    it("should return [0, 0] for empty string", () => {
      expect(parseFeetInches("")).toEqual([0, 0]);
    });

    it("should return [0, 0] for non-string input", () => {
      expect(parseFeetInches(null as any)).toEqual([0, 0]);
      expect(parseFeetInches(undefined as any)).toEqual([0, 0]);
      expect(parseFeetInches(123 as any)).toEqual([0, 0]);
    });

    it("should return [0, 0] for string with no numbers", () => {
      expect(parseFeetInches("hello world")).toEqual([0, 0]);
    });

    it("should handle zero values", () => {
      expect(parseFeetInches("0ft 0in")).toEqual([0, 0]);
      expect(parseFeetInches("0 0")).toEqual([0, 0]);
    });

    it("should handle very large numbers", () => {
      expect(parseFeetInches("10ft 11in")).toEqual([10, 11]);
    });

    it("should handle decimal inches", () => {
      expect(parseFeetInches("5ft 10.5in")).toEqual([5, 10.5]);
    });

    it("should handle decimal feet", () => {
      expect(parseFeetInches("5.5ft 10in")).toEqual([5.5, 10]);
    });
  });

  describe("format variations", () => {
    it("should handle mixed formats", () => {
      expect(parseFeetInches("5 feet 10in")).toEqual([5, 10]);
      expect(parseFeetInches("5ft 10 inches")).toEqual([5, 10]);
      expect(parseFeetInches("5 foot 10in")).toEqual([5, 10]);
      expect(parseFeetInches("5ft 10 inch")).toEqual([5, 10]);
    });

    it("should handle input with trailing/leading spaces", () => {
      expect(parseFeetInches("  5ft 10in  ")).toEqual([5, 10]);
    });

    it("should parse when inches come before feet", () => {
      expect(parseFeetInches("10in 5ft")).toEqual([5, 10]);
    });

    it("should handle multiple numbers when ft is specified", () => {
      expect(parseFeetInches("5ft 10")).toEqual([5, 10]);
      expect(parseFeetInches("5ft 10 20")).toEqual([5, 10]);
    });
  });

  describe("real-world examples", () => {
    it("should parse common height inputs", () => {
      expect(parseFeetInches("5' 9\"")).toEqual([5, 9]);
      expect(parseFeetInches("6' 2\"")).toEqual([6, 2]);
      expect(parseFeetInches("5'4\"")).toEqual([5, 4]);
      expect(parseFeetInches("5ft 8in")).toEqual([5, 8]);
      expect(parseFeetInches("5,5")).toEqual([5, 5]);
      expect(parseFeetInches("5 5")).toEqual([5, 5]);
      expect(parseFeetInches("5' 5")).toEqual([5, 5]);
      expect(parseFeetInches("4 4")).toEqual([4, 4]);
      expect(parseFeetInches("1, 5")).toEqual([1, 5]);
      expect(parseFeetInches("1', 5")).toEqual([1, 5]);
      expect(parseFeetInches("1 ft, 5")).toEqual([1, 5]);
    });

    it("should handle input from forms", () => {
      expect(parseFeetInches("5 feet 10 inches")).toEqual([5, 10]);
      expect(parseFeetInches("5 10")).toEqual([5, 10]);
    });
  });
});
