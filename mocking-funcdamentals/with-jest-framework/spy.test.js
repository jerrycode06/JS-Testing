const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Jerry", "Tom");
  expect(winner).toBe("Jerry");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Jerry", "Tom"],
    ["Jerry", "Tom"],
  ]);

  //cleanup
  utils.getWinner.mockRestore();
});
