import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.css']
})
export class SurveyAddComponent implements OnInit {

  isTrueOrFalse = false;
  isMultipleChoice = false;
  Questions = 1;

  form: any = {
    survey_name: null,
    survey_user_id: null,
    question_id: null,
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.isTrueOrFalse);
    console.log(this.isMultipleChoice);
  }

  onSubmit(): void {
    
  }

  selectChange(value: String): void {
    if(value === "T/F") {
      this.isTrueOrFalse = true;
    }else if(value === "Multiple Choice") {
      this.isMultipleChoice = true;
    }
  }

  
  addNewQuestion(): void {
    this.Questions += 1;
    console.log(this.Questions);
  }
}
