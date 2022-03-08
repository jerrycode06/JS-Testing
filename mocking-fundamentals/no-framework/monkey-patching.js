const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalWinner = utils.getWinner;

//Mocking the utils function
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Jerry", "Tom");
assert.strictEqual(winner, "Jerry");

// cleanup
utils.getWinner = originalWinner;
