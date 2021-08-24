const express = require('express')
const Student = require('../models/student/studentCollection')
const studentAuth =  require('../middleware/studentAuth')
const scrapeMostDemandedJobs = require('../generalPurposeFunctions/scrape/scrapeMostDemanded')
const jwt = require('jsonwebtoken')
const scrapeAllRoles = require('../generalPurposeFunctions/scrape/scrapeAllRoles')
const router = new express.Router()
const Scraping = require('../models/scraping/scrapingCollection')
const welcomeEmail = require('../generalPurposeFunctions/Emails/welcomeEmail')
const zeus = require('../generalPurposeFunctions/scrape/scrapeRolesDetails/try')
const bcrypt = require('bcrypt')
const resetPasswordEmail = require('../generalPurposeFunctions/Emails/resetPasswordEmail')
const writeCsv = require('../generalPurposeFunctions/scrape/csvWriteTemplate')
const getSkills = require('../generalPurposeFunctions/scrape/scrapeRolesSkills/scrapeRolesSkills')
const Roles = require('../models/roles/roles')
const multer = require('multer')
const sharp = require('sharp')
const Advisor = require('../models/advisor/advisorCollection')
const News = require('../models/news/newsCollection')
router.post('/students/signup', async (req,res)=>{    
    try{
        let oldStudent = await Student.findOne({email: req.body.email})
        if(oldStudent!=undefined){
            throw new Error('Email already taken')
        }
        const hashedPass = await bcrypt.hash(req.body.password, 8)
        const newStudent = await new Student({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            interests: req.body.interests,
            country: req.body.country,
            password: hashedPass
        })
        await newStudent.save()
        const token = await jwt.sign({email: req.body.email},'fypfridaystudent', {expiresIn: '3600000000'})
        await welcomeEmail(req.body.email, req.body.fname, req.body.lname, token)
        res.status(201).send({message: "succesfully signed in!"})
    }catch(e){
        res.status(400).send({error: e.message})
    }
})

router.post('/students/verify', async (req,res)=>{
    try {
        const token = req.body.token
        const decodedToken = jwt.verify(token, 'fypfridaystudent')
        const student = await Student.findOne({email: decodedToken.email})
        student.status = 'active'
        const newToken = await jwt.sign({email: student.email},'fypfridaystudent', {expiresIn: '3600000'})
        await student.save()
        res.status(200).send({token: newToken})
    } catch (error) {
        res.send(error)
    }
})

router.post('/students/login',async(req,res)=>{
    try{
        const student = await Student.findOne({email:req.body.email})
        if(student){
            if(student.status=='active'){
                const password = await student.password.trim()
                const isMatch = await bcrypt.compare(req.body.password, password)
                if(isMatch){
                    const newToken = await jwt.sign({email: student.email},'fypfridaystudent', {expiresIn: '3600000'})
                    res.status(200).send({token: newToken})
                }else{
                    throw new Error('invalid credentials')
                }
            }else{
                throw new Error('unverified account')
            }
        }else{
            throw new Error('invalid credentials')
        }
        
    }catch(e){
        res.status(400).send({error: e.message})
    }
})

router.post('/students/resetpass', async (req, res)=>{
    try {
        const token = await jwt.sign({email: req.body.email},'fypfridaystudent', {expiresIn: '3600000'})
        await resetPasswordEmail(req.body.email, token)
        res.status(200).send('Email sent')
    } catch (e) {
        console.log(e)
        res.status(400).send({error: e.message})
    }
})

router.patch('/students/resetpass', async (req, res)=>{
    try {
        const student = await Student.findOne({email: req.body.email})
        const hashedPass = await bcrypt.hash(req.body.password, 8)
        student.password = hashedPass
        await student.save()
        res.status(200).send('Password changed successfully')
    } catch (e) {
        console.log(e)
        res.status(400).send({error: e.message})
    }
})

router.get('/students/info', studentAuth, async (req, res)=>{
    try {
        let student = await Student.findOne({email: req.studentemail})
        // student.didTakeTest = true
        // student.interests = ['Electrician', 'Software Developer', 'Data Scientist']
        // await student.save()
        res.send({
            fname: student.fname,
            lname: student.lname,
            didTakeTest: student.didTakeTest,
            id: student._id,
            interests: student.interests
        })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.get('/token-validity', studentAuth, async (req,res)=>{
    try {
        res.status(200).send({email: req.studentemail})
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})

router.patch('/students/fname', studentAuth, async (req, res)=>{
    try {
        const student = await Student.findOne({email: req.studentemail})
        student.fname = req.body.fname
        await student.save()
        res.status(200).send('Fname changed successfully')
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})

router.patch('/students/lname', studentAuth, async (req, res)=>{
    try {
        const student = await Student.findOne({email: req.studentemail})
        student.lname = req.body.lname
        await student.save()
        res.status(200).send('Lname changed successfully')
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})

const uploadFile = multer({ 
    limits:{
        fileSize: 1000000 // unit in bytes,
    },
    fileFilter(req, file, cb){
        cb(undefined, true);
    }
})

router.post('/students/photo', studentAuth, uploadFile.single('upload1'), async (req,res)=>{
    const student = await Student.findOne({email:req.studentemail})
    let buffer = await sharp(req.file.buffer).resize({width: 120, height: 120}).png().toBuffer()
    student.image = buffer
    await student.save()
    let bufferOriginal = student.image
    let imageBase64 = Buffer.from(bufferOriginal).toString('base64')
    res.send({image: imageBase64})
}, (err, req, res, next)=>{
    res.status(401).send({Error: err.message})
})

router.delete('/students/photo', studentAuth, async (req,res)=>{
    const student = await Student.findOne({email:req.studentemail})
    student.image = undefined;
    await student.save();
    res.send("Successfully deleted")
});

router.get('/students/photo', studentAuth, async (req,res)=>{
    const student = await Student.findOne({email:req.studentemail})
    if (student.image!=undefined) {
        let bufferOriginal = student.image;
        let imageBase64 = Buffer.from(bufferOriginal).toString('base64');
        res.send({image: imageBase64, timestamp: student.createdAt, fname: student.fname, lname: student.lname});
    } else {
        res.status(200).send({timestamp: student.createdAt, fname: student.fname, lname: student.lname, error: "notfound"});
    }
})

router.patch('/students/changepassword', studentAuth, async(req,res)=>{
    try{
       const student = await Student.findOne({email:req.studentemail})
       const isMatch = await bcrypt.compare(req.body.oldPass, student.password)
       if(!isMatch){
           res.status(200).send('no match')
        }else{
            const hashedPass = await bcrypt.hash(req.body.newPass, 8)
            student.password = hashedPass
            await student.save()
            res.status(200).send('match')
        }
       }
       catch(e){
           res.status(400).send({error: e.message})
       }
})

router.get('/students/retreiveallroles', async (req, res)=>{
    try {
        let roles = await Roles.find()
        let filteredRoles = []
        roles.forEach(element => {
            filteredRoles.push(element.role)  
        })
        res.status(200).send(filteredRoles)
    } catch (error) {
        console.log(error)
        res.status(401).send('error')
    }
})

router.get('/students/allroles', async (req, res)=>{
    try {
        const allRoles = await Roles.find()
        res.status(201).send(allRoles)
    } catch (error) {
        res.status(400).send('error')
    }
})

router.get('/students/specificrole/:role', async (req, res)=>{
    const roles = await Roles.findOne({role: req.params.role})
    res.status(201).send(roles)
})

router.get('/students/entrylevel', async (req, res)=>{ // returns number of entry level roles
    const roles = await Roles.find()
    const advisors = await Advisor.find()
    let total = 0
    await roles.forEach(element => {
        total = total + element.sortJobs
    })
    // res.sendStatus(201).send(total)
    res.status(201).send({data:total, advisors: advisors.length})
})

router.get('/students/majors', studentAuth, async (req, res)=>{
    const roles = await Roles.find()
    const majors = []
    roles.forEach(element => {
        majors.push(element.role)
    })
    res.status(201).send(majors)
})

router.post('/students/connect', studentAuth, async (req, res)=>{
    try {
        const advisor = await Advisor.findById(req.body.id)
        const student = await Student.findOne({email: req.studentemail})  
        console.log('added ', advisor._id) 
        let arr = [...student.advisors]
        let arr1 = [...advisor.students]
        if(arr.includes(req.body.id)){
            throw new Error('You are already connected to this advisor')
        }
        arr.push(advisor._id)
        student.advisors = [...arr]
        arr1.push(student._id)
        advisor.students = [...arr1]
        let linkedInURL = advisor.linkedin
        await student.save()
        await advisor.save()
        res.status(200).send(linkedInURL)
    }catch (error) {
        res.status(400).send('error')
        console.log(error)
    }
})

router.get('/students/myadvisors', studentAuth, async(req, res)=>{
    try {
        const myAdvisors = await Student.findOne({email: req.studentemail})
        if(myAdvisors.advisors.length===0){
            res.status(200).send('')
        }else{
            let arr = []
            const sendRequest = ()=>{
                res.status(200).send(arr)
            }
            await myAdvisors.advisors.forEach( async (element, index)=>{
                let advisor = await Advisor.findById(element)
                arr.push(advisor)
                if(index+1===myAdvisors.advisors.length){
                    sendRequest()
                }
            })
        }
    } catch (error) {
        res.status(400).send('error')
    }
})

router.get('/students/isadvisor/:id', studentAuth, async(req, res)=>{
    try {
        const advisor = await Advisor.findById(req.params.id)
        const student = await Student.findOne({email: req.studentemail})
        let isFound = false
        student.advisors.forEach(element => {
            if(advisor._id.equals(element)){
                isFound = true
            }
        })
        res.status(200).send(isFound)
    } catch (error) {
        res.status(400).send('error')
    }
})

router.post('/students/removeadvisor', studentAuth, async(req, res)=>{
    try {
        const student = await Student.findOne({email: req.studentemail})
        const advisor = await Advisor.findById(req.body.id)
        let arr = [...student.advisors]
        let newStudentArr = []
        arr.forEach(element => {
            if(!advisor._id.equals(element)){
                newStudentArr.push(element)
            }
        })
        student.advisors = [...newStudentArr]
        let arr1 = [...advisor.students]
        let newAdvisorArr = []
        arr1.forEach(element => {
            if(!student._id.equals(element)){
                newAdvisorArr.push(element)
            }
        })
        advisor.students = [...newAdvisorArr]
        await student.save()
        await advisor.save()
        res.status(200).send(true)
    } catch (error) {
        res.status(400).send('error')
    }
})

router.post('/students/removeinterest', studentAuth, async(req, res)=>{
    try {
        const student = await Student.findOne({email: req.studentemail})
        let arr = [...student.interests]
        let newArr = []
        arr.forEach(element => {
            if(element!==req.body.interest){
                newArr.push(element)
            }
        })
        student.interests = [...newArr]
        await student.save()
        res.status(200).send(newArr)
    } catch (error) {
        res.status(400).send('error')
    }
})

router.post('/students/addinterest', studentAuth, async(req, res)=>{
    try {
        const student = await Student.findOne({email: req.studentemail})
        let arr = [...student.interests]
        arr.push(req.body.interest)
        student.interests = [...arr]
        await student.save()
        res.status(200).send(arr)
    } catch (error) {
        res.status(400).send('error')
    }
})

router.post('/students/testevaluation', studentAuth, async(req, res)=>{
    // ComputerScience
    // Math
    // Physics
    // English
    // Biology
    // Chemistry
    // TakeCareOfPeople
    // StandardizedTest
    // Programming
    // Writing
    // Communication
    // Design
})
router.get('/students/news', studentAuth, async(req, res)=>{
    const news = await News.find()
    res.status(200).send(news)
})
module.exports = router 