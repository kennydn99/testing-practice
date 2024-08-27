// Capitalize tests
import { capitalize } from "./capitalize";
test("capitalize is defined", () => {
  expect(capitalize("a")).toBeDefined();
});

test("capitalize returns same string letters", () => {
  expect(capitalize("abc")).toMatch(/abc/i);
});

test("capitalize returns string with first letter capitalized", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("capitalize returns correct string with capitalized input", () => {
  expect(capitalize("POOp")).toBe("POOp");
});

test("capitalize returns empty string if input is not string", () => {
  expect(capitalize(0)).toBe("");
});

test("capitalize returns empty string if input is empty string", () => {
  expect(capitalize("")).toBe("");
});
