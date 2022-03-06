const { sum, subtract, sumAsync, subtractAsync } = require("./math");

test("sum test of two numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract test of two numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("async sum of two numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("async subtract of two numbers", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
