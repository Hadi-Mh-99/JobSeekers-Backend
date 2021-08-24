const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')
const cleanData = require('../scrapeRolesDetails/try')
const scrape = async ()=>{
    let data = cleanData()
    let arr = []
    for (let i = 0; i < data.length; i++) {
        let one = ''
        let two = ''
        let skills = []
        let qualifications = []
        console.log(data[i].role)
        const response = await fetch(`https://www.indeed.com/career/${data[i].role}/career-advice`)
        const text = await response.text()
        const load = cheerio.load(text)
        try {
            const x = load(`#career-advice-page > div:nth-child(3) > div.content-wrapper.career-advice-content > div > div.content-section--full-bleed > div > div > div > ul`)[0].children.length
            for (let index = 1; index <= x; index++) {
                one = load(`#career-advice-page > div:nth-child(3) > div.content-wrapper.career-advice-content > div > div.content-section--full-bleed > div > div > div > ul > li:nth-child(${index})`).text()
                skills.push(one)
            }
            const y = load(`#career-advice-page > div:nth-child(3) > div.content-wrapper.career-advice-content > div > div.job-qualifications.content-wrapper.with-padding > div.content-section > div > ul`)[0].children.length
            for (let index = 1; index <= y; index++) {
                two = load(`#career-advice-page > div:nth-child(3) > div.content-wrapper.career-advice-content > div > div.job-qualifications.content-wrapper.with-padding > div.content-section > div > ul > li:nth-child(${index})`).text()
                if(two!=="Driver's License"){
                    qualifications.push(two.trim())
                }
            }
            let obj = {
                skills: skills,
                qualifications: qualifications
            }
            arr.push(obj)
        } catch (error) {
            console.log("Doesn't exist")
            let obj = {
                skills: '',
                qualifications: ''
            }
            arr.push(obj)
        }
    }
    return arr
}
module.exports = scrape