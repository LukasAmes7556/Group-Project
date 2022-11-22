import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question_text: String, 
    question_type: String, 
    default_answers: [String]
},{
    timestamps: true,
    collection: 'questions'
});

export default mongoose.model('Question', QuestionSchema);