const fs = require('fs')
const parse = require('csv-parser')
const readCsv = async (url) =>{
    let csvData = []
    let parsedData = []
    await fs.createReadStream(`${url}.csv`)
    .pipe(parse({
        delimiter: ','
    })
    )
    .on('data', function (row) {
        csvData.push(row)
    })
    .on('end', async() => {
        await csvData.forEach(async element => {
            await parsedData.push(Object.values(element)[0])
        });
        console.log('a')
        //return parsedData
    }).then((response)=>{
        console.log(response)
    })
    
}
module.exports = readCsv