import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedbackService {

  authToken: any;
  users: any;
  constructor(private http: HttpClient) { }
  saveFeedback(feedback): Observable<any> {
    return this.http.post('http://localhost:3000/contactus', feedback);
  }

}
