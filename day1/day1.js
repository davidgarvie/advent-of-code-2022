const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
const elfs = data
  .split("\n")
  .reduce(reduceInput, [0])
  .sort((a, b) => b - a);

const topThreeCalories = [...elfs].splice(0, 3).reduce((a, b) => a + b, 0);

console.log("The elf with the max calories is:", elfs[0]);
console.log("total calories is:", topThreeCalories);

function reduceInput(accum, current) {
  if (current.length === 0) {
    return [...accum, 0];
  }
  const index = accum.length - 1;
  const updatedArray = [...accum];
  updatedArray[index] = updatedArray[index] + parseInt(current);
  return updatedArray;
}
