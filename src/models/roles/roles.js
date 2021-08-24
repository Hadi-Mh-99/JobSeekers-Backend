const mongoose = require('mongoose')
const RolesSchema = new mongoose.Schema({
    role: {
        type: String
    },
    education_degree: [],
    salary: {
        type: String,
        required: true
    },
    sortSalary: {
        type: Number
    },
    jobs: {
        type: String
    },
    sortJobs:{
        type: Number
    },
    summary: {
        type: String
    },
    detail: [],
    skills: [],
    qualifications: [],
    video: {
        type: String
    }
})

const Model = mongoose.model('roles', RolesSchema)
module.exports = Model