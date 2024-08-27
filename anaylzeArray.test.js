import { analyzeArray } from "./analyzeArray";
test("analyzeArray method is defined", () => {
  expect(analyzeArray([])).toBeDefined();
});

test("analyzeArray method returns an object", () => {
  expect(typeof analyzeArray([])).toBe("object");
});

test("analyzeArray method returns an object with all properties", () => {
  expect(analyzeArray([])).toHaveProperty("average");
  expect(analyzeArray([])).toHaveProperty("min");
  expect(analyzeArray([])).toHaveProperty("max");
  expect(analyzeArray([])).toHaveProperty("length");
});

test("analyzeArray method returns an object with correct properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])["average"]).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6])["min"]).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6])["max"]).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6])["length"]).toBe(6);
});
