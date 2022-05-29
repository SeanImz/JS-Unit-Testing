import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

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
