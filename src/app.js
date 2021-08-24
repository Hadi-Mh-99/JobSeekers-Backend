const express = require('express')

const path = require('path')

const cors = require('cors')

const cron = require('node-cron');

require('./database/dbConnect')

const app = express()

const studentRouter = require("./routes/student")

const advisorRouter = require("./routes/advisor")

app.use(express.json(), cors())

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 4200

app.use(studentRouter)

app.use(advisorRouter)

// cron.schedule('* * * * *', function() {
//     console.log('running a task every minute')
// })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})