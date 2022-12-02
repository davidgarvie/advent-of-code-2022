const fs = require("fs");
const path = require("path");

const inputMap = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
  X: "ROCK",
  Y: "PAPER",
  Z: "SCISSORS",
};

const shapeMap = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

const scoreMap = {
  LOSS: 0,
  DRAW: 3,
  WIN: 6,
};

function playRounds(player1Input, player2Input) {
  let score = shapeMap[player2Input];
  if (player1Input === player2Input) {
    score += scoreMap["DRAW"];
  }
  if (player1Input === "ROCK" && player2Input === "PAPER") {
    score += scoreMap["WIN"];
  }
  if (player1Input === "ROCK" && player2Input === "SCISSORS") {
    score += scoreMap["LOSS"];
  }
  if (player1Input === "PAPER" && player2Input === "ROCK") {
    score += scoreMap["LOSS"];
  }
  if (player1Input === "PAPER" && player2Input === "SCISSORS") {
    score += scoreMap["WIN"];
  }
  if (player1Input === "SCISSORS" && player2Input === "ROCK") {
    score += scoreMap["WIN"];
  }
  if (player1Input === "SCISSORS" && player2Input === "PAPER") {
    score += scoreMap["LOSS"];
  }
  return score;
}

function parseInput(data) {
  const input = data
    .trim()
    .split("\n")
    .map((x) => x.split(" "))
    .map((inputs) => inputs.map((x) => inputMap[x]));
  return input;
}

const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const input = parseInput(data);
const score = input.map((x) => playRounds(...x)).reduce((a, b) => a + b, 0);
console.log("score: ", score);
