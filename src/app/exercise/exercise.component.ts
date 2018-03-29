import { Component, OnInit } from '@angular/core';
import { ViewfoodService } from '../services/viewfood.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  type: String;
  public result: any[];

  constructor(private viewService: ViewfoodService) { }

  ngOnInit() {

  }
  // tslint:disable-next-line:member-ordering
  lat = 51.678418;
  // tslint:disable-next-line:member-ordering
  lng = 7.809007;

  // tslint:disable-next-line:one-line
  onSubmit(id: string): void {
    // console.log(id);
    const catogery = {
       id: id
    };
    this.viewService.fetchCategory(catogery).subscribe(data => {
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
// tslint:disable-next-line:semicolon
