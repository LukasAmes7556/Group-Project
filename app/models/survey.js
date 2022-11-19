import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    survey_id: String, 
    survey_user_id: String, 
    survey_created_at: String,
    survey_done_by : {
        type:Schema.Types.ObjectId, ref: 'User'
    },
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