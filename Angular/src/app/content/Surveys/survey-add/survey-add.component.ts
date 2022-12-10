import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Router } from '@angular/router'; 
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

  form: any = {
    Questions: 1,
    surveyTitle: "",
    questionType: null,
    questionTitle: "",
    message: "",
    Answers: {
      Answer1: null,
      Answer2: null,
      Answer3: null,
      Answer4: null
    }
  }

  isSuccessfull=true; 
  errorMessage = ""; 

  constructor(private answerService: AnswerServiceService, private questionService: QuestionServiceService, private surveyService: SurveyServiceService, private tokenService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    
  }

  
  onSubmit(): void {
    //Save the final Question
    this.surveyService.addSurvey(this.form).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessfull = true; 
          //Redirect to survey list
          this.backToList(); 

        },
        error: err => {
          this.errorMessage = err.error.message; 
          this.isSuccessfull = false; 
        }
      }); 
    
  }

  addNewQuestions() {
    this.form.Questions += 1;

    //Only save the surveyTitle once
    if(this.form.Questions = 1) {
    console.log(this.form.surveyTitle);
    }

    console.log(this.form.questionType);

    console.log(this.form.questionTitle);

    console.log(this.form.Answers.Answer1);
    console.log(this.form.Answers.Answer2);
    console.log(this.form.Answers.Answer3);
    console.log(this.form.Answers.Answer4);

    this.form.message = "Your Question has been saved, feel free to create more then click the submit button.";

    //Resets for Next Question
    this.form.questionTitle = "";
    this.form.Answers.Answer1 = "";
    this.form.Answers.Answer2 = "";
    this.form.Answers.Answer3 = "";
    this.form.Answers.Answer4 = "";
  }

  backToList(): void {
    this.router.navigate(['/list']);
  }
}


