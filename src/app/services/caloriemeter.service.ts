import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CaloriemeterService {

  constructor(private http: Http) { }
  getitems(): Observable<any> {
    return this.http.get('http://localhost:3000/caloriemeter/caloriemeter')
    .map(res => res.json());
}
}
