const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

function checkUnique(input) {
  const checked = [];
  for (character of input) {
    if (checked.includes(character)) {
      return false;
    }
    checked.push(character);
  }
  return true;
}

function calculateCharacters(input, length) {
  let marker = "";
  for (let i = 0; i < input.length; i++) {
    if (marker.length === length) {
      if (checkUnique(marker)) {
        return i;
      }
      const x = marker.substring(1);
      marker = x;
    }
    marker += input[i];
  }
}

const result1 = calculateCharacters(data, 4);
const result2 = calculateCharacters(data, 14);
console.log(`The first result is ${result1}`);
console.log(`The second result is ${result2}`);
