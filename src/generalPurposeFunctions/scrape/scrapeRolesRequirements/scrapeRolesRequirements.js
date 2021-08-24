const fs = require('fs')
const parse = require('csv-parser')
var parsedData = []
const readCsv = async (url) =>{
    let csvData = []
    fs.createReadStream(`data.csv`)
    .pipe(parse({
        delimiter: ','
    })
    )
    .on('data', function (row) {
        csvData.push(row)
    })
    .on('end', async() => {
        await csvData.forEach(async element => {
            await parsedData.push(Object.values(element)[0].trim())
        })
        console.log('a')
        return parsedData
    })
    
}