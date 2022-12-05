const fs = require("fs");
const path = require("path");

const data = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .split("\n");

function parseCrates(input) {
  const crates = [];
  for (let row of input) {
    let j = 0;
    for (let i = 0; i < row.length; i += 4) {
      const x = row.slice(i, i + 4);
      const match = x.match(/\w/i);
      if (match) {
        crates[j] = crates[j] || [];
        crates[j].push(match[0]);
      }
      j++;
    }
  }
  return crates;
}

const crateInput = [];
for (let row of data) {
  if (row.indexOf("[") > -1) {
    crateInput.push(row);
  }
}

const crates = parseCrates(crateInput);
console.log("crates", crates);

for (let row of data) {
  if (row.indexOf("move") === -1) {
    continue;
  }
  const [numberToMove, startColumn, endColumn] = row.match(/\d+/g).map(Number);
  const cratesToMove = crates[startColumn - 1].splice(0, numberToMove);
  crates[endColumn - 1].unshift(...cratesToMove);
}

console.log("crates", crates.map((x) => x[0]).join(""));
