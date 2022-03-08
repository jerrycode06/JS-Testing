const thumbWar = require("../thumb-war");
const utils = require("../utils");

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});

test("return winner", () => {
  const winner = thumbWar("Jerry", "Tom");
  expect(winner).toBe("Jerry");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Jerry", "Tom"],
    ["Jerry", "Tom"],
  ]);

  //cleanup
  utils.getWinner.mockReset();
});
