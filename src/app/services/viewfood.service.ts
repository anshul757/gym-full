import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ViewfoodService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  viewFood( prefrence): Observable<any> {
    return this.http.post('http://localhost:3000/addfood/viewfood',  prefrence);
  }

  fetchCategory( prefrence): Observable<any> {
    return this.http.post('http://localhost:3000/addexercise/viewimage',  prefrence);
  }

  fetchYogaCategory( prefrence): Observable<any> {
    return this.http.post('http://localhost:3000/addyoga/viewimage',  prefrence);
  }
}
