const mongoose = require("mongoose");

const ExamQuestionsSchema = new mongoose.Schema({
    examId: {
        type: String,
    },
    questionTitle: {
        type: String,
    },
    qtrue: {
        type: String,
    },
    qfalse: {
        type: String,
    },
},
)

module.exports = mongoose.model("examquestions", ExamQuestionsSchema);