const fs = require("fs");
const path = require("path");

const data = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .trim()
  .split("\n");
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const getPriority = (letter) => letters.indexOf(letter) + 1;
const duplicates = data.map((rucksack) => {
  const compartment1 = rucksack.slice(0, rucksack.length / 2);
  const compartment2 = rucksack.slice(rucksack.length / 2);
  for (const letter of compartment1) {
    if (compartment2.indexOf(letter) > -1) {
      return letter;
    }
  }
});

const result = duplicates.reduce((a, b) => a + getPriority(b), 0);
console.log(`sum of duplicates is: ${result}`);

const groups = [];
for (let i = 0; i < data.length; i += 3) {
  groups.push(data.slice(i, i + 3));
}

const badgeIds = groups.map((group) => {
  const [rucksack1, rucksack2, rucksack3] = group;
  for (const letter of rucksack1) {
    if (rucksack2.indexOf(letter) > -1) {
      if (rucksack3.indexOf(letter) > -1) {
        return letter;
      }
    }
  }
});

const result2 = badgeIds.reduce((a, b) => a + getPriority(b), 0);
console.log("result2", result2);
