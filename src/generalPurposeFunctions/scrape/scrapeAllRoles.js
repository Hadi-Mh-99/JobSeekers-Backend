const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')

const scrape = async (url)=>{
    const response = await fetch(url)
    const text = await response.text();
    const load = cheerio.load(text)
    i = 1
    j = 1
    roles = []
    while(j<=3){
        while(i<=3){
            const firstRole = load(`#careers-content > section.styles-module--careerSearch--3iOTb > div > div:nth-child(70) > div:nth-child(${j}) > a:nth-child(${i})`).text()
            if(firstRole!=''){
                roles.push(firstRole)
            }
            i++
        }
        i = 0
        j++
    }
    return roles
    //console.log(roles)
}
//scrape('https://www.indeed.com/career-advice/careers')
module.exports = scrape