import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const QUESTION_API = environment.apiUrl + '/questions/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  constructor(private httpClient: HttpClient) { }


  getQuestionsList(): Observable<any>{
    return this.httpClient.get(QUESTION_API+'list', httpOptions);
  }

  getQuestions(id: string): Observable<any> {
    return this.httpClient.get(QUESTION_API+id, httpOptions);
  }

  addQuestions(survey: any): Observable<any> {
    return this.httpClient.post(QUESTION_API+'add', survey, httpOptions);
  }

  editQuestions(survey: any): Observable<any> {
    return this.httpClient.put(QUESTION_API+'edit/' + survey['_id'], survey, httpOptions);
  }

  deleteQuestions(id: string): Observable<any> {
    return this.httpClient.delete(QUESTION_API+'delete/' + id, httpOptions);
  }
}


