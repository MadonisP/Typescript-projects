const express = require('express')
const ExamQuestions = require('../models/examQuestions')
const router = express.Router()

//Get ExamQ(s)
router.get('/', (req, resp) => {
    ExamQuestions.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

router.post('/', (req, resp) => {
    const examQuestions = new ExamQuestions({
        examId: req.body.examId,
        questionTitle: req.body.questionTitle,
        qtrue: req.body.qtrue,
        qfalse: req.body.qfalse,
    })
    examQuestions.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

router.delete('/:id', (req, resp) => {
    ExamQuestions.deleteOne({ _id: req.params.id })
        .then(data => {
            resp.json(data)
        }).catch(e => {
            resp.json({ message: e })
        })
})

module.exports = router;