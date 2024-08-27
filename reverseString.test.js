import { reverseString } from "./reverseString";
test("reverseString is defined", () => {
  expect(reverseString("a")).toBeDefined();
});

test("reverseString returns empty string if input is empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverseString returns empty string if input is not string", () => {
  expect(reverseString(0)).toBe("");
});

test("reverseString returns a string", () => {
  expect(typeof reverseString("abc")).toBe("string");
});

test("reverseString to return the string reversed", () => {
  expect(reverseString("abc")).toBe("cba");
});
