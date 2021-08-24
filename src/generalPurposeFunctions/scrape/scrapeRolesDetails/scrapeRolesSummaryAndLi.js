const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')
const parse = require('csv-parser')
const fs = require('fs')
const saveArrayToExcel = require('../csvWriteTemplate')
let csvData = []
let parsedData = []
const scrape = async ()=>{
    let url = ''
    let count = 0
    let data = []
    let liData = []
    let obj = ''
    let paragraph = ''
    let li = ''
    let i = 351
    let element = ''
    let len = ''
    let tempo = 0
    
    while(i<=420){ //420
        liData = []
        element = parsedData[i]
        console.log(element)
        if(element[0]=='A' || element[0]=='O' || element[0]=='U' || element[0]=='I' ||element[0]=='E'){
            url = `https://www.indeed.com/career-advice/careers/what-does-an-${element}-do`
        }else{
            url = `https://www.indeed.com/career-advice/careers/what-does-a-${element}-do`
        }
        
        const response = await fetch(url)
        const text = await response.text();
        const load = cheerio.load(text)
        paragraph = load(`#career-path-page-content > div > div > p:nth-child(2)`).text()
        const x = await load(`#career-path-page-content > div > div > div:nth-child(3) > ul`)[0]
        const y = await load(`#career-path-page-content > div > div > div:nth-child(4) > ul`)[0]
        if(x!=undefined){
            len = x.children.length
            tempo = 3
        }else if(y!=undefined){
            len = y.children.length
            tempo = 4
        }else{
            console.log('physical')
            const z = await load(`#career-path-page-content > div > div > div:nth-child(5) > ul`)[0]
            if(z!=undefined){
                len = z.children.length
            }else{
                len = z
            }
            tempo = 5
        }
        for (let index = 1; index <= len; index++) {
            li = load(`#career-path-page-content > div > div > div:nth-child(${tempo}) > ul > li:nth-child(${index}) > span`).text()
            liData.push(li)
        }
        if(liData.length==0){
            console.log(element, url)
            count++
        }
        obj = {
            //paragraph: paragraph,
            role: element,
            li : [...liData],
        }
        data.push(obj)
        //console.log(obj)
        i++
    }
    //saveArrayToExcel(data)
    console.log(data)
    console.log(count)
    return data
}
const parseData = async ()=>{
    await fs.createReadStream('Data.csv')
      .pipe(parse({
          delimiter: ','
      })
      )
      .on('data', function (row) {
        csvData.push(row)
      })
      .on('end', async() => {
          //parsedData.push('wedding-planner')
        await csvData.forEach( async element => {
            await parsedData.push(Object.values(element)[0].trim().replace(/\s/g, '-'))
        })
        //console.log(parsedData)
        scrape()
      })
}
parseData()
//module.exports = parseData