import questionModel from "../../models/question.js";

export function GetList(req,res,next){
    questionModel.find((err, questionCollection)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', questions: questionCollection, user: req.user})
    });
}
export function Add(req,res,next){
    let newquestion = new questionModel({
        "question_text": req.body.question_text,
        "question_type":req.body.question_type,
        "default_answers": req.body.default_answers
    });
    questionModel.create(newquestion,(err) =>{
        if (err) {
            console.error(err)
            res.end(err);
        }
        res.json({success: true, msg: 'Success', newquestion });
    });
}
export function Edit(req,res,next){
    let updatedquestion = new questionModel({
        "question": req.body.question,
        "question_type":req.body.question_type,
        "default_answers": req.body.default_answers
    });
    questionModel.create(updatedquestion,(err) =>{
        if (err) {
            console.error(err)
            res.end(err);
        }
        res.json({success: true, msg: 'Success', updatedquestion });
    });
}
export function Delete(req,res,next){
    let id = req.params.id;

    questionModel.remove({_id: id}, (err)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success'})
    });
}