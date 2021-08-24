const jwt = require('jsonwebtoken')
const Advisor =  require('../models/advisor/advisorCollection')
const advisorAuth = async (req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,'fypfridaystudent')
        const advisor = await Advisor.findOne({email: decoded.email, 'tokens.token': token})
        if(!advisor){
            throw new Error(e)
        }
        req.advisorId = advisor._id
        next()
    }catch(e){
        if(e.message === "jwt expired"){
            res.status(401).send({error:"please login in again"})
        }
        res.status(401).send({error: "unauthorized"}) 
    }
}

module.exports = advisorAuth