import { Component, OnInit } from '@angular/core';
import { ViewfoodService } from '../services/viewfood.service';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})
export class YogaComponent implements OnInit {
  public result: any[];


  constructor(private viewService: ViewfoodService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  lat = 58.678418;
  // tslint:disable-next-line:member-ordering
  lng = 14.809007;

  // tslint:disable-next-line:one-line
  onSubmit(id: string): void {
    const catogery = {
      id: id
   };
   this.viewService.fetchYogaCategory(catogery).subscribe(data => {
    // tslint:disable-next-line:one-line
    if (data.success){
      console.log('you are registered successfully');
      this.result = data.data;
    }
    // tslint:disable-next-line:one-line
    else{

      console.log('something went wrong');
    }

  });
  }
}
