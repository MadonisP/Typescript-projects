const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const examQuestionsRoute = require('./routes/examQuestions')

app.use(cors())
app.use(bodyParser.json())// olmadan yazıları algıalyamıyor examId undefined error!

mongoose.connect("mongodb+srv://MadonisP:iki002Mm@quizapp.eusnci7.mongodb.net/msiDaily?retryWrites=true&w=majority").then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})

app.use('/examquestions', examQuestionsRoute)

app.listen(5000, () => {
    console.log('Server started on 5000')
})
