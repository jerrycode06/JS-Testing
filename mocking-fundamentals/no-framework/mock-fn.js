const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  return mockFn;
}

const originalWinner = utils.getWinner;
//Mocking the utils function -> making our own jest.fn
utils.getWinner = fn((p1, p2) => p1);
// utils.getWinner = mockFn

const winner = thumbWar("Jerry", "Tom");
// console.log(utils.getWinner.mock);
assert.strictEqual(winner, "Jerry");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Jerry", "Tom"],
  ["Jerry", "Tom"],
]);

// cleanup
utils.getWinner = originalWinner;
