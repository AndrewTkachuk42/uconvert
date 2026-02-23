# uconvert

Unit conversion utilities.

## Installation

```bash
npm install uconvert
```

## Usage

### `convert(value, options)`

Converts a numeric value from one unit to another.

**Parameters:**

- `value` (number) — The value in the source unit.
- `options` (object):
  - `fromUnits` — Source unit (use `MetricUnits` or `ImperialUnits`).
  - `toUnits` — Target unit. Must be the same dimension as `fromUnits` (e.g. length ↔ length), or an error is thrown.
  - `roundTo` (optional) — Number of decimal places to round the result. Omit to return the unrounded value.

**Returns:** The value in the target unit (optionally rounded).

**Example:**

```ts
import { convert, MetricUnits, ImperialUnits } from "uconvert";

// 5 feet to meters, rounded to 2 decimals
convert(5, {
  fromUnits: ImperialUnits.FT,
  toUnits: MetricUnits.M,
  roundTo: 2,
});
// => 1.52

// Same unit: returns value unchanged
convert(100, { fromUnits: MetricUnits.CM, toUnits: MetricUnits.CM });
// => 100
```

### `round(value, decimalPlaces?)`

Rounds a number to a given number of decimal places.

**Parameters:**

- `value` (number) — The number to round.
- `decimalPlaces` (optional) — Number of digits after the decimal point. Omit to return the value unchanged.

**Returns:** The rounded number (or the original number if `decimalPlaces` is omitted).

**Example:**

```ts
import { round } from "uconvert";

round(1.2345, 2); // => 1.23
round(1.2345);    // => 1.2345
```

## Exported types and enums

Use these with `convert` for type-safe unit arguments:

| Export | Description |
|--------|-------------|
| `ConvertOptions` | Options object for `convert`: `{ fromUnits, toUnits, roundTo? }`. |
| `Units` | Union type: `MetricUnits \| ImperialUnits`. |
| `MetricUnits` | Enum: `CM`, `M`, `KG`, `KM_H`. |
| `ImperialUnits` | Enum: `IN`, `FT`, `LB`, `MPH`. |
| `UnitSystem` | Enum: `METRIC`, `IMPERIAL`. |
| `Dimension` | Enum: `LENGTH`, `WEIGHT`, `SPEED`. |

`fromUnits` and `toUnits` must use the same dimension (e.g. both length, or both weight); otherwise `convert` throws.

---

## Height utility

The `height` object provides helpers for converting between centimeters and feet–inches and for parsing feet–inches strings.

**Import:**

```ts
import { height } from "uconvert";
```

### `height.toFeetInches(valueInCm, roundTo?)`

Converts a height in centimeters to feet and inches.

**Parameters:**

- `valueInCm` (number) — Height in centimeters.
- `roundTo` (optional) — Number of decimal places for the inches part. Omit for unrounded.

**Returns:** A `FeetInches` tuple `[feet, inches]`.

**Example:**

```ts
height.toFeetInches(170);      // => [5, 6.93...]
height.toFeetInches(170, 1);   // => [5, 6.9]
```

### `height.toCentimeters(feetInches)`

Converts a feet–inches tuple to centimeters.

**Parameters:**

- `feetInches` — A `FeetInches` tuple `[feet, inches]` (e.g. from `toFeetInches` or `parseFeetInches`).

**Returns:** Height in centimeters (number).

**Example:**

```ts
height.toCentimeters([5, 10]);  // => 177.8
```

### `height.parseFeetInches(input)`

Parses a string into a `[feet, inches]` tuple. Accepts formats like `"5 ft 10 in"`, `"5'10\""`, `"5 10"`, and variations with "feet"/"foot"/"inches"/"inch".

**Parameters:**

- `input` (string) — String to parse.

**Returns:** A `FeetInches` tuple `[feet, inches]`. Returns `[0, 0]` if parsing fails or input is not a string.

**Example:**

```ts
height.parseFeetInches("5 ft 10 in");  // => [5, 10]
height.parseFeetInches("5'10\"");      // => [5, 10]
height.parseFeetInches("6 2");         // => [6, 2]
```

### `FeetInches` type

Tuple type `[number, number]`: first element is feet, second is inches. Use it when passing or receiving values from `toFeetInches`, `toCentimeters`, and `parseFeetInches`.

```ts
import { height, type FeetInches } from "uconvert";

const fi: FeetInches = height.toFeetInches(170);
height.toCentimeters(fi);
```
