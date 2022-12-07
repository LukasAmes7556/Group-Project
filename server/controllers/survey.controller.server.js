import surveyModel from '../models/survey.js';

import { UserDisplayName, GetUserId } from '../utils/index.js';

var today = new Date(); 
today.setDate(today.getDate() - 1); 

export function DisplaySurveyList(req, res, next){
    var creator = UserDisplayName(req);
    
    if (creator !== "") {
        userModel.find({
            displayName: creator
        }), function (err, user){
            if (err){
                console.error(err); 
                res.end(err); 
            }else {
                var userId = user[0]._id; 
                surveyModel.find({creatorId: userId}, function(err, surveyCollection) {
                    if(err){
                        console.error(err);
                        res.end(err);
                    }
            
                    res.render('index', {title: 'Survey List', page: 'survey/list', surveys: surveyCollection, displayName: UserDisplayName(req), id:GetUserId(req)});
                })
            }
        }
    }
    else {
        surveyModel.find(function (err, surveyCollection) {
            if (err) {
                console.error(err);
                res.end(err);
            }
    
            res.render('index', {
                title: 'Surveys',
                page: 'surveys/list',
                surveys: surveyCollection,
                displayName: UserDisplayName(req),
                id:GetUserID(req),
                username: GetUsername(req)
            });
        })
    }
    
}

export function DisplaySurveyAddPage(req, res, next){
    res.render('index', { title: 'Add Survey', page: 'survey/edit', survey: {}, displayName: UserDisplayName(req), id:GetUserId(req) });
}

export function ProcessSurveyAddPage(req, res, next){
    var creator = UserDisplayName(req); 

     userModel.find({ displayName: creator }, function (err, user) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        else {
            var newSurvey = surveyModel({
                createdBy: req.body.createdBy,
                publisherID: user[0]._id,
                survey_name: req.body.survey_name,
                createdOn: today,
                active: req.body.active,
                expiry: req.body.expire,
                questions: req.body.questionIdArray
            });


            surveyModel.create(newSurvey, (err) => {
                if (err) {
                    console.error(err);
                    res.end(err);
                };

            })
            res.redirect('/surveys/list');

        }
    })
}

export function DisplaySurveyEditPage(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, (err, movie) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Survey', page: 'survey/edit', survey: survey, displayName: UserDisplayName(req), id:GetUserId(req) });
    });    
}

export function ProcessSurveyEditPage(req, res, next){

    let id = req.params.id;
    
    let updatedSurvey = surveyModel({
        "survey_name" : req.body.survey_name,
        "survey_timer" : req.body.survey_timer,
        "survey_user_id": req.user._id,
        "question_id": req.body.questionId_Array
    });

    surveyModel.updateOne({_id: id}, {$set:updatedSurvey}, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/survey-list')
    })
}

export function ProcessSurveyDelete(req, res, next){
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/survey-list');
    })
}
