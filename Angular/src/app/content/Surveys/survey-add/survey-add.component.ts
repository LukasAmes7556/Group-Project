import { Component, OnInit } from '@angular/core';
import { AnswerServiceService } from 'src/app/services/answer-service.service';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { SurveyServiceService } from 'src/app/services/survey-service.service';

@Component({
  selector: 'app-survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.css']
})
export class SurveyAddComponent implements OnInit {

  isTrueOrFalse = false;
  isMultipleChoice = false;
  Questions = 1;
  QuestionsArray = [];
  AnswersArray = [];

  survey: any = {
    survey_name: null,
    survey_user_id: null,
    question_id: null
  }
  
  question: any = {
    question: null,
    question_type: null,
    default_answer: null
  }
  
  answer: any = {
    user_id: null,
    question_id: null,
    entered_answer: null
  }


  constructor(private answerService: AnswerServiceService, questionService: QuestionServiceService, surveyService: SurveyServiceService) { }

  ngOnInit(): void {
    
  }

  
  onSubmit(): void {
    
  }

  selectChange(value: String): void {

    let QuestionArray = new Array<number>();
    QuestionArray.push(this.Questions);

      if(value === "T/F") {
        this.isTrueOrFalse = true;
        this.isMultipleChoice = false;
      }else if(value === "Multiple Choice") {
        this.isMultipleChoice = true;
        this.isTrueOrFalse = false;
      }
  }

  
  addNewQuestion(): void {
    this.Questions += 1;
  }

  counter(i: number) {
    return new Array(i);
  }
  
  getQuestionNumber(i: number) {
    return i;
  }
}
