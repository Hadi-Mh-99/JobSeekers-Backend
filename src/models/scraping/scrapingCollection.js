const mongoose = require('mongoose');
const scrapingSchema = new mongoose.Schema({
    data : [{
        role: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        jobcount: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        details: [],
        requirements: []
    }]
}, {timestamps: true});

const Model = mongoose.model('Scraping', scrapingSchema);
module.exports = Model;