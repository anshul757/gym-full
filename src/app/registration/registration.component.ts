import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: String;
  email: String;
  username: String;
  password: String;


  constructor(private authService: AuthService,
  private router: Router
  ) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:one-line
  onRegisterSubmit(){

    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // register user
    this.authService.registerUser(user).subscribe(data => {
      // tslint:disable-next-line:one-line
      if (data.success){
        console.log('you are registered successfully');
        this.router.navigate(['/login']);

      }
      // tslint:disable-next-line:one-line
      else{

        console.log('something went wrong');
        this.router.navigate(['/register']);
      }

    });
  }
}
