import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../services/feedback.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  message: string;

  constructor(private feedbackservice: FeedbackService, private router: Router) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  lat = 23.029802;

  // tslint:disable-next-line:member-ordering
  lng = 72.527271;


  onFeedbackSaved()
// tslint:disable-next-line:one-line
{
  const feedback = {
    name: this.name,
    email: this.email,
    phone: this.phone,
    message: this.message
  };

  this.feedbackservice.saveFeedback(feedback).subscribe(
    data => {
      // tslint:disable-next-line:one-line
      if (data.success){
        console.log('you are registered successfully');
        this.router.navigate(['/contact']);

      }
      // tslint:disable-next-line:one-line
      else{

        console.log('something went wrong');
        this.router.navigate(['/contact']);
      }

    });
}
}
