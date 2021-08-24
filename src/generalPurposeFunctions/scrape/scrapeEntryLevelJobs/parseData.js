    const scrapeData = async (data)=>{
        const fs = require('fs');
        const writeStream = fs.createWriteStream('data1.csv');
        const cheerio = await require('cheerio')
        const fetch = await require('isomorphic-fetch')
        let results = []
        let url = ''
        let encoded = ''
        let i = 0
        while(i<data.length){
            encoded = encodeURI(data[i])
            url = `https://www.linkedin.com/jobs/search?keywords=${encoded}&location=Worldwide&geoId=92000000&trk=public_jobs_jobs-search-bar_search-submit&f_E=2&redirect=false&position=1&pageNum=0`
            const response = await fetch(url)
            const text = await response.text()
            const load = await cheerio.load(text)
            const content = load('#main-content > div > section > div.results-context-header').text()
            writeStream.write(`${content.split('Results')[0]} \n`);
            console.log(content.split('Results')[0])
            i++
        }
    }

    const parseData = async ()=>{
    const parse = require('csv-parser')
    const fs = require('fs')
    let csvData = []
    let parsedData = []
    await fs.createReadStream('book.csv')
      .pipe(parse({
          delimiter: ','
      })
      )
      .on('data', function (row) {
        csvData.push(row)
      })
      .on('end', async() => {
          parsedData.push('Software Developer')
          await csvData.forEach( async element => {
              await parsedData.push(Object.values(element)[0])
          })
          //console.log(parsedData)
          scrapeData(parsedData)
      })
}
parseData()