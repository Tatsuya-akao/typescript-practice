import { createInterface } from "readline";

const rI = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rI.question("文字", (line) => {
  const num = Number(line);

  console.log(num + 1000);

  rI.close();
});
