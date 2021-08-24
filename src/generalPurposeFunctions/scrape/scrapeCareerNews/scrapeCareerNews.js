const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')
require('../../../database/dbConnect')
const News = require('../../../models/news/newsCollection')
const scrape = async (url)=>{
    const response = await fetch(url)
    const text = await response.text()
    const load = cheerio.load(text)
    let i = 0
    const count = load(`#masonry-list1_1-0`)[0].children
    count.forEach(element => {
        if(element.name==='li'){
            i++
        }  
    })
    let str = ''
    let str1 = ''
    for (let k = 0; k < i; k++) {
        if(k===0){
            str = '#masonry-list__item_1-0'
            str1 = '#mntl-card_1-0'
        }else{
            str = `#masonry-list__item_1-0-${k}`
            str1 = `#mntl-card_1-0-${k}`
        }
        let str2 = `${str1} > div.card__media > img`
        const news = await new News({
            title: load(str).text().trim(),
            image: load(str2).attr('data-src'),
            url: load(str1).attr('href')
        })
        await news.save()
    }
}
scrape('https://www.thebalancecareers.com/career-news-5025093')