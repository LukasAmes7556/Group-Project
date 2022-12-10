import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyServiceService } from 'src/app/services/survey-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class MovieListComponent implements OnInit {

  isLoggedIn = false;
  hasError = false;
  surveys = [];

  constructor(
    private surveyService: SurveyServiceService,
    private router: Router,
    private tokenStorageService: TokenStorageService  
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.surveyService.getSurveysList()
      .subscribe({
        next: data => {
          this.surveys = data.surveys;
          this.hasError = false;
        },
        error: err => {
          this.hasError = true;
        }
      })
  }

  editSurvey(id: string): void {
    this.router.navigate(['/survey/edit/' + id]);
  }

  deleteSurvey(id: string): void {
    this.surveyService.deleteSurvey(id)
      .subscribe({
        next: data => {
          console.log(data);
          this.reloadPage();
        },
        error: err => {
          this.hasError = true;
        }
      })
  }

  reloadPage(): void {
    window.location.reload();
  }

  getSurvey(id: string): void {
    this.router.navigate(['/survey/answer-page/' + id]);
  }

}
