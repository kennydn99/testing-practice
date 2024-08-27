import { caesarCipher } from "./caesarCipher";
test("caesarCipher method is defined", () => {
  expect(caesarCipher("abc")).toBeDefined();
});

test("caesarCipher method returns a string", () => {
  expect(typeof caesarCipher("abc")).toBe("string");
});

test("caesarCipher method returns correct shifted string", () => {
  expect(caesarCipher("klm", 1)).toBe("lmn");
});

test("caesarCipher method accounts for lettercase preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher method accounts for wrapping", () => {
  expect(caesarCipher("xyZ", 3)).toBe("abC");
});

test("caesarCipher method keeps punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
