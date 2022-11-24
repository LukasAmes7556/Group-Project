import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const ANSWERS_API = environment.apiUrl + '/answers/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  constructor(private httpClient: HttpClient) { }


  getAnswersList(): Observable<any>{
    return this.httpClient.get(ANSWERS_API+'list', httpOptions);
  }

  getAnswers(id: string): Observable<any> {
    return this.httpClient.get(ANSWERS_API+id, httpOptions);
  }

  addAnswer(survey: any): Observable<any> {
    return this.httpClient.post(ANSWERS_API+'add', survey, httpOptions);
  }

  editAnswer(survey: any): Observable<any> {
    return this.httpClient.put(ANSWERS_API+'edit/' + survey['_id'], survey, httpOptions);
  }

  deleteAnswer(id: string): Observable<any> {
    return this.httpClient.delete(ANSWERS_API+'delete/' + id, httpOptions);
  }
}




