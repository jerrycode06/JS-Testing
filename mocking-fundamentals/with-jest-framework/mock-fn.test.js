const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  const originalWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Jerry", "Tom");
  expect(winner).toBe("Jerry");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Jerry", "Tom"],
    ["Jerry", "Tom"],
  ]);

  //cleanup
  utils.getWinner = originalWinner;
});
