import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SubscribeService {

  subscribeToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:one-line
  subscribeUser(subscribe): Observable<any> {
    return this.http.post('http://localhost:3000/subscribe', subscribe);
  }

}
