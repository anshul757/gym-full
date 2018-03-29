import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:one-line
  registerUser(user): Observable<any> {
    return this.http.post('http://localhost:3000/users/register', user);
  }

  // tslint:disable-next-line:one-line
  authenticateUser(user){

    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user);
  }
}
