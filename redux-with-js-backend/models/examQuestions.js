const mongoose = require("mongoose");

const ExamQuestionsSchema = new mongoose.Schema({
    examId: {
        type: String,
    },
    questionTitle: {
        type: String,
    },
    options: [{
        option: {
            type: String,
        },
        isCorrect: {
            type: Boolean,
            default: false
        }
    }],
},
)

module.exports = mongoose.model("examquestions", ExamQuestionsSchema);