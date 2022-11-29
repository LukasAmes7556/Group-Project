import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const SURVEY_API = environment.apiUrl + '/surveys/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  constructor(private httpClient: HttpClient) { }


  getSurveysList(): Observable<any>{
    return this.httpClient.get(SURVEY_API+'list', httpOptions);
  }

  getSurvey(id: string): Observable<any> {
    return this.httpClient.get(SURVEY_API+id, httpOptions);
  }

  addSurvey(survey: any): Observable<any> {
    return this.httpClient.post(SURVEY_API+'add', survey, httpOptions);
  }

  editSurvey(survey: any): Observable<any> {
    return this.httpClient.put(SURVEY_API+'edit/' + survey['_id'], survey, httpOptions);
  }

  deleteSurvey(id: string): Observable<any> {
    return this.httpClient.delete(SURVEY_API+'delete/' + id, httpOptions);
  }
}
