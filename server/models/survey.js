import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    createdBy: String,
    publisherID: String,
    survey_name: String, 
    createdOn: Date,
    active: String,
    expiry: String,
    survey_user_id: {type:Schema.Types.ObjectId, ref:'User'}, 
    question_id: [{type:Schema.Types.ObjectId, ref:'Question'}]
}, {
    timestamps: true,
    collection: 'surveys'
});

export default mongoose.model('Survey', SurveySchema);