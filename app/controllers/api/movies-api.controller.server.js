import surveyModel from '../../models/movie.js';

export function GetList(req, res, next){
    surveyModel.find((err, surveyCollection)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', survey: surveyCollection, user: req.user})
    });
}

export function Get(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, (err, survey) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', survey, user: req.user })
    });
}

export function Add(req, res, next){
    let newSurvey = new surveyModel({
        "title": req.body.title,
        "startdate": req.body.startdate,
        "enddate": req.body.enddate,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3,
    });

    surveyModel.create(newSurvey, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', newSurvey });
    })
}

export function Edit(req, res, next){
    let id = req.params.id;

    let updatedSurvey = new surveyModel({
        "_id": id,
        "name": req.body.name,
        "contactno": req.body.contactno,
        "email": req.body.email,
        "comments": req.body.comments
    });

    surveyModel.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', updatedSurvey });
    })
}

export function Delete(req, res, next){
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success'})
    })
}