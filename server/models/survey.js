import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    survey_name: String, 
    timer:String,
    survey_user_id: {type:Schema.Types.ObjectId, ref:'User'}, 
    question_id: [{type:Schema.Types.ObjectId, ref:'Question'}]
}, {
    timestamps: true,
    collection: 'surveys'
});

export default mongoose.model('Survey', SurveySchema);