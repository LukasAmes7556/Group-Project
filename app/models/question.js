import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: String, 
    question_type: String, 
    default_answers: String,
    correct_answer: String
}, {
    timestamps: true,
    collection: 'questions'
});

export default mongoose.model('Questions', QuestionSchema);