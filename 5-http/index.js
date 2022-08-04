const http = require('http');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const Access_key = process.env.Access_key || '20774700b2395e0e253a82574cd817d9';//9
const city = hideBin(process.argv);
const url = `http://api.weatherstack.com/current?access_key=${Access_key}&query=${city}`;

http.get(url, (res) => {
    const {statusCode} = res;
    if (statusCode !== 200){
        console.log(`statusCode: ${statusCode}`);
        return
    }

    res.setEncoding('utf8')
    let rowData = '';
    res.on('data', (chunk) => rowData += chunk);
    res.on('end', () => {
        let parseData = JSON.parse(rowData);
        if ( parseData.success == false) {
            console.error(parseData);
            return;
        }
        console.log(`Current temperature in ${parseData.location.name} is ${parseData.current.temperature}℃`);
    });
}).on('error', (err) => {
    console.error(err);
});
