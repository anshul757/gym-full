import { Component, OnInit } from '@angular/core';
import {SubscribeService} from '../services/subscribe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email: string;

  constructor(private subscribeService: SubscribeService,
  private router: Router
  ) { }

  ngOnInit() {
  }

  onUserSubscribed()
  // tslint:disable-next-line:one-line
  {
      const subscribe = {
        email: this.email,
      };
      this.subscribeService. subscribeUser(subscribe).subscribe(
        data => {
          // tslint:disable-next-line:one-line
          if (data.success){
            console.log('you are registered successfully');
            this.router.navigate(['/home']);

          }
          // tslint:disable-next-line:one-line
          else{

            console.log('something went wrong');
            this.router.navigate(['/home']);
          }

        });

  }

}
