import { it, expect, describe } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should convert string values to a number of type number", () => {
    //ARRANGE
    const values = ["1", "2", "3"];

    //ACT
    const result = transformToNumber(values);

    //ASSERT
    expect(result).toBeTypeOf("number");
  });

  it("should yield NaN for non-transformable values", () => {
    const values = ["invalid"];

    const result = transformToNumber(values);

    expect(result).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an arry of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    //expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
