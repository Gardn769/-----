#!/usr/bin/env node
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
const min = 0;
const max = 100;

function guess_number() {
  let rn = Math.floor(Math.random() * (max - min) + min);
  console.log("Загадано число в диапазоне от 0 до 100 ");
  rl.on("line", (answer) => {
    if (answer != rn) {
        console.log(answer > rn ? "Меньше" : "Больше");
    } else {
      console.log(`Отгадано число ${answer}`);
      rl.close();
    }
  });
}

guess_number();
