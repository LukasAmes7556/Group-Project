sampleSurveyData = {
    "survey_id": 123,
    "survey_user_id":"submitted_user_id",
    "survey_created_at": '12:51:00PM',
    "question_id": [123,124,125,126,127],
}
sampleCreatedQuestionData = [
    {
        "question_id": 123,
        "question":"What is the value of #FFFFFF",
        "question_type": "checkbox",
        "default_answers" :["Green","Red","White","Black"],
        "correct_answer": "White",
    },
    {
        "question_id": 124,
        "question":"What is the value of #FFFF00",
        "question_type": "multiple_Choice",
        "default_answers" :["Pink","Red","Yello","Black"],
        "correct_answer": "Yello",
    },
    {
        "question_id": 125,
        "question":"What is the value of #00FF00",
        "question_type": "dropdown",
        "default_answers" :["Green","Red","White","Black"],
        "correct_answer": "Green",
    },
    {
        "question_id": 126,
        "question":"What do you feel anout the surevy",
        "question_type": "para",
        "correct_answer": "loremloremloremloremloremloremlorem",
    }
]

SurveyAnsweredData = [
    {
        "answer_id" : 11111,
        "survey_id": 123,
        "question_id": 123,
        "user_id" : "user_id123",
        "Enterered": "White"
    },
    {
        "answer_id" : 11112,
        "question_id": 123,
        "user_id" : "user_id",
        "Enterered": "White"
    },
    {
        "answer_id" : 11113,
        "question_id": 123,
        "user_id" : "user_id123",
        "Enterered": "White"
    },
    {
        "answer_id" : 11114,
        "question_id": 123,
        "user_id" : "user_id",
        "Enterered": "White"
    }
]



