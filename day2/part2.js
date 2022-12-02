const fs = require("fs");
const path = require("path");

const inputMap = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
  X: "LOSS",
  Y: "DRAW",
  Z: "WIN",
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

function playRounds(player1Input, desiredResult) {
  let score = scoreMap[desiredResult];

  if (player1Input === "ROCK" && desiredResult === "LOSS") {
    score += shapeMap["SCISSORS"];
  }
  if (player1Input === "ROCK" && desiredResult === "DRAW") {
    score += shapeMap["ROCK"];
  }
  if (player1Input === "ROCK" && desiredResult === "WIN") {
    score += shapeMap["PAPER"];
  }
  if (player1Input === "PAPER" && desiredResult === "LOSS") {
    score += shapeMap["ROCK"];
  }
  if (player1Input === "PAPER" && desiredResult === "DRAW") {
    score += shapeMap["PAPER"];
  }
  if (player1Input === "PAPER" && desiredResult === "WIN") {
    score += shapeMap["SCISSORS"];
  }
  if (player1Input === "SCISSORS" && desiredResult === "LOSS") {
    score += shapeMap["PAPER"];
  }
  if (player1Input === "SCISSORS" && desiredResult === "DRAW") {
    score += shapeMap["SCISSORS"];
  }
  if (player1Input === "SCISSORS" && desiredResult === "WIN") {
    score += shapeMap["ROCK"];
  }

  return score;
}

function mapInputToOption(input) {
  return inputMap[input];
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
