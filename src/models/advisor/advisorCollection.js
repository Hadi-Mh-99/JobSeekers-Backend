const mongoose = require('mongoose');
const Schema = mongoose.Schema
const advisorSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    roles:[],
    image:{
        type: String,
        required: true
    },
    workExperience:[],
    students:[]
}, {timestamps: true});
const Advisor = mongoose.model('Advisor', advisorSchema);
module.exports = Advisor;