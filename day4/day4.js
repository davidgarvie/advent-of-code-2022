const fs = require("fs");
const path = require("path");

const data = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .trim()
  .split("\n");

const result1 = data.reduce((accum, pair) => {
  const [elf1, elf2] = pair.split(",");
  const [elf1Start, elf1End] = elf1.split("-").map(Number);
  const [elf2Start, elf2End] = elf2.split("-").map(Number);
  if (elf1Start <= elf2Start && elf1End >= elf2End) {
    return accum + 1;
  }
  if (elf1Start >= elf2Start && elf1End <= elf2End) {
    return accum + 1;
  }
  return accum;
}, 0);

console.log(`Result 1: ${result1}`);

const result2 = data.reduce((accum, pair) => {
  const [elf1, elf2] = pair.split(",");
  const [elf1Start, elf1End] = elf1.split("-").map(Number);
  const [elf2Start, elf2End] = elf2.split("-").map(Number);
  if (elf1Start <= elf2Start && elf1End >= elf2Start) {
    return accum + 1;
  }
  if (elf2Start <= elf1Start && elf2End >= elf1Start) {
    return accum + 1;
  }
  return accum;
}, 0);

console.log(`Result 2: ${result2}`);
