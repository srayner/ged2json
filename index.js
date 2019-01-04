const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("input.ged"),
  crlfDelay: Infinity
});

rl.on("line", line => {
  const n1 = line.indexOf(" ");
  const n2 = line.indexOf(" ", n1 + 1);

  const lineNo = line.substring(0, n1);
  const code = line.substring(n1 + 1, n2);
  const text = line.substring(n2);

  const array = line.split(" ");
  const object = {
    lineNo: array[0],
    code: array[1],
    text: array[2]
  };
  console.log(`Line from file: ${line}`);
  console.log("first space: " + n1);
  console.log("second space: " + n2);
  console.log("line:" + lineNo);
  console.log("code:" + code);
  console.log("text:" + text);
  console.log(object);
});
