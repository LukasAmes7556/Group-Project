import answerModel from '../../models/answer.js';

export function GetList(req, res, next){
    answerModel.find((err, answerCollection)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', answer: answerCollection})
    });
}

export function Add(req, res, next){
    let newAnswer = new answerModel({
        "user_id":req.user._id,
        "question_id":req.body.question_id,
        "enterered_answer":req.body.enterered_answer
    });

    answerModel.create(newAnswer,(err)=>{
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({success: true, msg: 'Success', newAnswer });

    });
}

export function Delete(req, res, next){
    let id = req.params.id;

    answerModel.remove({_id: id}, (err)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success'})
    })
}