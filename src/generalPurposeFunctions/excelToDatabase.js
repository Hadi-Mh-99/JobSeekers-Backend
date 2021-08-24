/* role
Name
Education_Degree
Salary
Jobs
Summary
Detail
Skills
Qualification
Education_Summary
*/
require('../database/dbConnect')
const Roles = require('../models/roles/roles')
const fs = require('fs')
const parse = require('csv-parser')
const arr = []
let i = 0
const readCsv = async () =>{
    let csvData = []
    await fs.createReadStream(`book3.csv`)
    .pipe(parse({
        delimiter: ','
    })
    )
    .on('data', function (row) {
        csvData.push(row)
    })
    .on('end', async() => {
        let i = 0
        await csvData.forEach(async element => {
            arr.push(Object.values(element)[0])
            let education_degree = [...Object.values(element)[1].split(', ')]
            let detail = [...Object.values(element)[5].split('. ')]
            let skills = [...Object.values(element)[6].split('. ')]
            let qualifications = [...Object.values(element)[7].split('. ')]
            let sortJobs = Object.values(element)[3].split('+')[0]
            sortJobs = sortJobs.split(',')
            sortJobs = (sortJobs[0] + sortJobs[1])
            let sortSalary = (Object.values(element)[2].split(' per')[0])
            try {
                let Prom1 = await new Roles({
                    role: Object.values(element)[0].trim(),
                    education_degree,
                    salary: Object.values(element)[2],
                    jobs: Object.values(element)[3],
                    summary: Object.values(element)[4],
                    detail,
                    skills,
                    qualifications,
                    sortJobs: parseInt(sortJobs),
                    sortSalary: parseInt(sortSalary)
                })
                await Prom1.save()
                // let Prom1 = {
                //     role: Object.values(element)[0].trim(),
                //     education_degree,
                //     salary: Object.values(element)[2],
                //     jobs: Object.values(element)[3],
                //     summary: Object.values(element)[4],
                //     detail,
                //     skills,
                //     qualifications,
                //     sortJobs: parseInt(sortJobs),
                //     sortSalary: parseInt(sortSalary)
                // }
                i = i + 1
                console.log(i)
            } catch (error) {
                console.log(error)
            }
        })
    })
    
}
readCsv()