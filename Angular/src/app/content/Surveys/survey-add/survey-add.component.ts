import { Component, OnInit } from '@angular/core';
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

  survey: any = {
    survey_name: null,
    survey_user_id: null,
    questions: null
  }

  question: any = {
    question: null,
    question_type: null
  }
  

  constructor(private answerService: AnswerServiceService, private questionService: QuestionServiceService, private surveyService: SurveyServiceService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    
  }

  
  onSubmit(): void {
    this.survey.survey_user_id = this.tokenService.getUser();
  }

  counter(i: number) {
    return Array(i);
  }

  addNewQuestions() {
    this.Questions += 1;
  }
}
