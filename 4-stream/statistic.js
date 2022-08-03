
const fs = require('fs')
const readline = require('readline')

const RStream = fs.createReadStream(process.argv[2], {encoding: 'utf-8'}, (err) =>{
    if (err) throw err;
});

let cGame =  0;
let cWins =  0;
let cLose =  0;

readline.createInterface(RStream)
.on('line', (line) => {
    cGame++;
    if (line.indexOf('Победа') == 0)
        cWins++;
    else
        cLose++;
})
.on('close', () => {
    console.log(`Всего игр: ${cGame} \nПобед: ${cWins} \nПоражений: ${cLose} \nПроцент побед: ${(cWins / cGame)*100}`);
});