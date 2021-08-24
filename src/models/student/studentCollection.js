const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Advisor = require('../advisor/advisorCollection')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema
const studentSchema = new mongoose.Schema({
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
        unique: true,
        required: true
    },
    image:{
        type:Buffer,
    },
    status:{
        type:String,
        default:"pending"
    },
    didTakeTest:{
        type:Boolean,
        default:false
    },
    interests:[],
    password:{
        type: String,
        required: true
    },
    advisors:[]
}, {timestamps: true});

studentSchema.methods.addAdvisor = async function(email){
    const advisor = await Advisor.findOne({email:email})
    this.advisors = this.advisors.concat({advisor:advisor})
    await this.save()
}

studentSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({email: this.email},'fypfridaystudent', {expiresIn: '3600000'})
    this.tokens = this.tokens.concat({token: token})
    await this.save()

    return token
}
studentSchema.statics.findByCredentials = async (_email,_password)=>{
    const student = await Student.findOne({email: _email})
    if(!student){
        throw new Error('incorrect user or password')
    }

    const isMatch = await bcrypt.compare(_password, student.password.trim())
    console.log(isMatch)
    if(!isMatch){
        throw new Error('incorrect user or password')
    }

    return student 
}
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;