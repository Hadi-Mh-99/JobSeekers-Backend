const mongoose = require('mongoose')
const newsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    url: {
        type: String
    }
})

const News = mongoose.model('News', newsSchema)
module.exports = News