import surveyModel from "../../models/survey.js";


export function GetList(req,res,next) {
    surveyModel.find({survey_user_id:req.user._id},(err, surveyCollection)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', survey: surveyCollection, user: req.user});
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
        "survey_name" : req.body.survey_name,
        "survey_user_id": req.user._id,
        "timer":req.body.timer,
        "question_id": req.body.questionId_Array
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
    let id = req.param._id;

    let updatedSurvey = new surveyModel({
        "survey_name" : req.body.survey_name,
        "timer" : req.body.survey_name,
        "survey_user_id": req.user._id,
        "question_id": req.body.questionId_Array
    });

    surveyModel.updateOne({_id: id}, {$set:updatedSurvey}, (err) => {
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