const saveArrayToExcel = (arr)=>{
    const fs = require('fs');
    const writeStream = fs.createWriteStream('newdata100.csv');
    arr.forEach(element => {
        writeStream.write(`${element} \n`);    
    });
}
module.exports = saveArrayToExcel