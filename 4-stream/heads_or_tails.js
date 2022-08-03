const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const fs = require("fs");

const rl = readline.createInterface({ input, output });
const WStream = fs.createWriteStream(process.argv[2], {encoding: 'utf-8'}, {flags: 'a'}, (err) =>{
    if (err) throw err;
});

function heads_or_tails(answer) {
    let rn = Math.floor(Math.random() * 2 + 1);
    let result = answer == rn ? "Победа" : "Поражение";
    console.log(result, "Введенное число - " + answer, "Загаданное число - " + rn);
    WStream.write(result + '\n');
};

function main(){
    console.log("Орел или решка. \nВведите 1 или 2 чтобы играть, другое - выход.");
    rl.on("line", (answer) => {
        if (answer == 1 || answer == 2)
        {
            heads_or_tails(answer);
            console.log("Введите 1 или 2 чтобы играть, другое - выход.");
        }
        else
            rl.close();
    });
}

main();