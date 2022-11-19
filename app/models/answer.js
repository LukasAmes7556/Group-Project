import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnsweredSchema = new Schema({
    question: String, 
    user_id:{
        type:Schema.Types.ObjectId, ref:'User'
    },
    question_id: {
        type:Schema.Types.ObjectId, ref:'Question'
    },
    enterered_answer: String
}, {
    timestamps: true,
    collection: 'answers'
});

export default mongoose.model('Answer', QuestionSchema);