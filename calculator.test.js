import { calculator } from "./calculator";
test("Calculator Object exists", () => {
  expect(calculator).toBeDefined();
});

test("Calculator object has defined arithmetic methods", () => {
  expect(calculator.add(0, 0)).toBeDefined();
  expect(calculator.subtract(0, 0)).toBeDefined();
  expect(calculator.multiply(0, 0)).toBeDefined();
  expect(calculator.divide(0, 0)).toBeDefined();
});

test("Calculator object's methods return numbers", () => {
  expect(typeof calculator.add(1, 1)).toBe("number");
  expect(typeof calculator.subtract(1, 1)).toBe("number");
  expect(typeof calculator.multiply(1, 1)).toBe("number");
  expect(typeof calculator.divide(1, 1)).toBe("number");
});

test("Calculator object's methods return correct answer ", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(1, 4)).toBe(-3);
  expect(calculator.multiply(2, 5)).toBe(10);
  expect(calculator.divide(10, 5)).toBe(2);
});
