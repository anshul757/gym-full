import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }


  // tslint:disable-next-line:one-line
  // onLoginSubmit(){
  //   const user = {

  //     username: this.username,
  //     password: this.password

  //   };
  //   this.authservice.authenticateUser(user).subscribe(data => {

  //     if (data.success)
  //     // tslint:disable-next-line:one-line
  //     {
  //       this.authservice.storeuserdata(data.token, data.user);
  //     }
  //   });

  // }

}
