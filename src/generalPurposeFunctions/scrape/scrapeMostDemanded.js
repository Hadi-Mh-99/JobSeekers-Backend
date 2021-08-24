const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')

const scrape = async (url)=>{
    const response = await fetch(url)
    const text = await response.text();
    const load = cheerio.load(text)
    let data = []
    for (let index = 1; index <= 15; index++) {
        let arr = []
        let dataObject = {
            title: '',
            salary: '',
            duties: '',
            dutiesList: [],
            requirements: '',
            requirementsList: []
        }

        //console.log(`-------------------------------------`)
        let i = index * 6
        const title = load(`#article-content > div.styles-module--wrapper--1AFSa > div > div:nth-child(${i})`).text()
        dataObject.title = title
        const salary = load(`#article-content > div.styles-module--wrapper--1AFSa > div > p:nth-child(${i+1})`).text()
        dataObject.salary = salary
        const duties = load(`#article-content > div.styles-module--wrapper--1AFSa > div > p:nth-child(${i+2})`).text()
        dataObject.duties = duties
        //list_duties is a list: need to loop over children
        const list_duties_length = load(`#article-content > div.styles-module--wrapper--1AFSa > div > div:nth-child(${i+3}) > ul`)[0].children.length
        let list_duties_data = ''
        for (let index = 1; index <= list_duties_length; index++) {
            let list_duties = load(`#article-content > div.styles-module--wrapper--1AFSa > div > div:nth-child(${i+3}) > ul > li:nth-child(${index})`).text()
            list_duties_data = list_duties_data + list_duties + '\n'
            arr.push(list_duties)
        }
        dataObject.dutiesList = arr
        arr = []
        const requirements = load(`#article-content > div.styles-module--wrapper--1AFSa > div > p:nth-child(${i+4})`).text()
        dataObject.requirements = requirements
        //list_requirements is a list: need to loop over children
        const list_requirements_length = load(`#article-content > div.styles-module--wrapper--1AFSa > div > div:nth-child(${i+5}) > ul`)[0].children.length
        let list_requirements_data = ''
        for (let index = 1; index <= list_requirements_length; index++) {
            let list_requirements = load(`#article-content > div.styles-module--wrapper--1AFSa > div > div:nth-child(${i+5}) > ul > li:nth-child(${index})`).text()
            list_requirements_data = list_requirements_data + list_requirements + '\n'
            arr.push(list_requirements)
        }
        dataObject.requirementsList = arr
        //console.log(title,'\n', salary, '\n', duties,'\n', list_duties_data,'\n', requirements,'\n', list_requirements_data)
        data.push(dataObject)
    }
    return data
}
// scrape('https://www.indeed.com/career-advice/finding-a-job/in-demand-careers')
module.exports = scrape