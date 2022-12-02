import { Component, OnInit, ViewChild } from '@angular/core';
import { AnswerServiceService } from 'src/app/services/answer-service.service';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { SurveyServiceService } from 'src/app/services/survey-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.css']
})
export class SurveyAddComponent implements OnInit {

  Questions = 1;
  surveyTitle = "";
  questionType = null;
  questionTitle = "";
  message = "";

  Answers: any = {
    Answer1: null,
    Answer2: null,
    Answer3: null,
    Answer4: null
  };

  constructor(private answerService: AnswerServiceService, private questionService: QuestionServiceService, private surveyService: SurveyServiceService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    
  }

  
  onSubmit(): void {
    //Save the final Question


    //Redirect to survey list
    
  }

  addNewQuestions() {
    this.Questions += 1;


    // Console Logs to be removed, they are just for debugging. Each time the add Button is Clicked It will save the previous question.

    //Only save the surveyTitle once
    if(this.Questions = 1) {
    console.log(this.surveyTitle);
    }

    console.log(this.questionType);

    console.log(this.questionTitle);

    console.log(this.Answers.Answer1);
    console.log(this.Answers.Answer2);
    console.log(this.Answers.Answer3);
    console.log(this.Answers.Answer4);

    this.message = "Your Question has been saved, feel free to create more then click the submit button.";

    //Resets for Next Question
    this.questionTitle = "";
    this.Answers.Answer1 = "";
    this.Answers.Answer2 = "";
    this.Answers.Answer3 = "";
    this.Answers.Answer4 = "";
  }
}


