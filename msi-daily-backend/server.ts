import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from "dotenv";
dotenv.config();

const app = express()

import userRoute from './routes/user-route'
//const examQuestionsRoute = require('./routes/ExamQuestions')
//const userExamsRoute = require('./routes/UserExams')
//const examRoute = require('./routes/Exam')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_ACCESS || "").then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})

app.use('/users', userRoute)
//app.use('/examquestions', examQuestionsRoute)
//app.use('/exam', examRoute)
//app.use('/userexams', userExamsRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`)
})
