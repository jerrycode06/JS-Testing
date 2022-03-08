const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    console.log("inside mockFn");
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  console.log("In Fn");
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}

// Making our own spyOn function like jest
function spyOn(obj, prop) {
  console.log("In SpyOn");
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

spyOn(utils, "getWinner");
//Mocking the utils function -> making our own mockImplementation
utils.getWinner.mockImplementation((p1, p2) => {
  console.log("Inside mock implementation");
  return p1;
});

const winner = thumbWar("Jerry", "Tom");
// console.log(utils.getWinner.mock);
assert.strictEqual(winner, "Jerry");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Jerry", "Tom"],
  ["Jerry", "Tom"],
]);

// cleanup
utils.getWinner.mockRestore();
