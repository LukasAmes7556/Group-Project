import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    name: String, 
    year: String, 
    director: String,
    genre: String,
    runtime: Number
}, {
    timestamps: true,
    collection: 'movies'
});

export default mongoose.model('Movies', SurveySchema);