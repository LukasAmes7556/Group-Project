import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerServiceService } from 'src/app/services/answer-service.service';
import { SurveyServiceService } from 'src/app/services/survey-service.service';

@Component({
  selector: 'app-answer-page',
  templateUrl: './answer-page.component.html',
  styleUrls: ['./answer-page.component.css']
})
export class AnswerPageComponent implements OnInit {

  survey: any = {
    survey_name: null,
    survey_user_id: null,
    timer: null,
    questionId_Array: null
  }

  question: any = {
    question_text: null,
    question_type: null,
    default_answers: null
  }


  
  
  isSuccessfull = true;
  errorMessage = "";

  constructor(
    private surveyService: SurveyServiceService, 
    private answerService: AnswerServiceService,
    private router: Router,
    private route: ActivatedRoute
    ) { }



  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: params => {
          console.log(params);
          this.survey._id = params['id'];

          this.surveyService.getSurvey(this.survey._id)
            .subscribe({
              next: data => {
                this.survey = data.survey;
              },
              error: err => {
                this.errorMessage = err.error.message;
                this.isSuccessfull = false;
              }
            })



        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSuccessfull = false;
        }
      })
  }

  onSubmit(){
    
  }
  
  
  backToList(){
    this.router.navigate(['/surveys/list']);
  }

  NextQuestion() {}



}
