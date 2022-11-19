import questionModel from "../../models/question.js";

export function GetList(){
    questionModel.find((err, questionCollection)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', questions: questionCollection, user: req.user})
    });
}
export function Add(){
    let newquestion = new questionModel({
        "question": req.body.question,
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
export function Edit(){
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
export function Delete(){
    let id = req.params.id;

    questionModel.remove({_id: id}, (err)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success'})
    });
}