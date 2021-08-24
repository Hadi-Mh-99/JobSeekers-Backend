const mongoose = require('mongoose');
const Schema = mongoose.Schema
const noteSchema = new mongoose.Schema({

    students:{
        ref: 'Student',
        type: Schema.Types.ObjectId
    },

    advisors:{
        ref:'Advisor',
        type: Schema.Types.ObjectId
    },
    type:{
        type:String,
        enum:['toSelf','advice']
    },
    title:
    {
        type:String
    },
    body:
    {
        type:String
    }
    
},{timestamps: true});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;