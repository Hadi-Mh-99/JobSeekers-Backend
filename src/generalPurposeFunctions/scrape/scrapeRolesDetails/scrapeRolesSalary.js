const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')
const parse = require('csv-parser')
const fs = require('fs')
const saveArrayToExcel = require('../csvWriteTemplate')
let csvData = []
// let parsedData = [
//     'Web Designer',
//     'Warehouse Worker',
//     'Veterinary Technician', 
//     'Veterinary Assistant', 
//     'Veterinarian', 
//     'Vascular Surgeon', 
//     'UX Designer', 
//     'Urologist'
// ]
let parsedData = []

/*
#career-path-page-content > div > div > div:nth-child(7) > ul > li:nth-child(1) > span
#career-path-page-content > div > div > div:nth-child(8) > ul > li:nth-child(1) > span
#career-path-page-content > div > div > div:nth-child(7) > ul > li:nth-child(1) > span


#career-path-page-content > div > div > p:nth-child(3)
#career-path-page-content > div > div > p:nth-child(2)
#career-path-page-content > div > div > p:nth-child(2)
#career-path-page-content > div > div > div:nth-child(5) > ul
#career-path-page-content > div > div > div:nth-child(3) > ul
#career-path-page-content > div > div > div:nth-child(3) > ul
#career-path-page-content > div > div > div:nth-child(3) > ul
#career-path-page-content > div > div > div:nth-child(4) > ul
#career-path-page-content > div > div > div:nth-child(4) > ul
#career-path-page-content > div > div > div:nth-child(3) > ul
#career-path-page-content > div > div > div:nth-child(3) > ul > li:nth-child(1) > span > p

#career-path-page-content > div > div > div:nth-child(8) > ul > li:nth-child(1) > span > a > strong
#career-path-page-content > div > div > div:nth-child(8) > ul > li:nth-child(1) > span > a > strong

#career-path-page-content > div > div > div:nth-child(8) > ul > li:nth-child(1) > span > a

#career-path-page-content > div > div > div:nth-child(7) > ul > li:nth-child(1) > span > strong > a
*/

// const trial = async ()=>{
//     let url = ''
//     let role = ''
//     let data = []
//     let liData = []
//     let obj = ''
//     let paragraph = ''
//     let li = ''
//     await csvData.forEach( async element => {
//         role = await element.replace(/\s/g, '-')
//         url = `https://www.indeed.com/career-advice/careers/what-does-a-${role}-do`
//         const response = await fetch(url)
//         const text = await response.text();
//         const load = await cheerio.load(text)
//         paragraph = await load(`#career-path-page-content > div > div > p:nth-child(2)`).text()
//         const len = await load(`#career-path-page-content > div > div > div:nth-child(3) > ul`)[0].children.length
//         for (let index = 1; index <= len; index++) {
//             li = await load(`#career-path-page-content > div > div > div:nth-child(3) > ul > li:nth-child(${index}) > span`).text()
//             await liData.push(li)
//         }
//         obj = {
//             paragraph: paragraph,
//             li : [...liData],
//         }
//         await data.push(obj)
//         console.log(obj)
//     });
// }
// trial()
// const saveToExcel = ()=>{
//     console.log('save to excel')
// }
const scrape = async ()=>{
    let url = ''
    let data = []
    let obj = ''
    let i = 0
    let element = ''
    
    while(i<=418){
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
        // let x = await load(`#career-path-page-content > div > div > div:nth-child(8) > ul > li:nth-child(1) > span > a`).text()
        // #career-path-page-content > div > div > div:nth-child(6) > ul > li:nth-child(1) > span > a > strong
        let x = await load(`#career-path-page-content > div > div > div:nth-child(6) > ul > li:nth-child(1) > span > a > strong`).text()
        // let x = await load(`#career-path-page-content > div > div > div:nth-child(7) > ul > li:nth-child(1) > span > p > a`).text()
        //
        // let x = await load(`#career-path-page-content > div > div > div:nth-child(9) > ul > li:nth-child(1) > span > a`).text()
        // let x = await load(`#career-path-page-content > div > div > div:nth-child(7) > ul > li:nth-child(1) > span > a`).text()
        //let x = await load(`#career-path-page-content > div > div > div:nth-child(7) > ul > li:nth-child(1) > span > a > strong`).text()
        obj = {
            role: element,
            US: x
        }
        data.push(obj)
        console.log(obj)
        i++
    }
    saveArrayToExcel(data)
}
//scrape()
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