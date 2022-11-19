import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    survey_id: String, 
    survey_user_id: String, 
    question_id: [
        {
            type:Schema.Types.ObjectId, ref:'Questions'
        }
    ]
}, {
    timestamps: true,
    collection: 'surveys'
});

export default mongoose.model('Survey', SurveySchema);