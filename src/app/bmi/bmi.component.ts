import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  height = 0.0;
   // tslint:disable-next-line:member-ordering
   weight = 0.0;
    // tslint:disable-next-line:member-ordering
    bmiValue: number;
    // tslint:disable-next-line:member-ordering
    value: string;

    onSubmit() {
      this.bmiValue = this.weight / (this.height * this.height);

      if (this.bmiValue < 18.5)
      // tslint:disable-next-line:one-line
      {
        this.value = 'underweight';
      }
      // tslint:disable-next-line:one-line
      else if (this.bmiValue > 18.5 && this.bmiValue < 24.9 )
      // tslint:disable-next-line:one-line
      {
        this.value = 'normal weight';
      }
      // tslint:disable-next-line:one-line
      else if (this.bmiValue > 25.0 && this.bmiValue < 29.9 )
      // tslint:disable-next-line:one-line
      {
        this.value = 'overweight ';
      }
      // tslint:disable-next-line:one-line
      else if (this.bmiValue >= 30.0)
      // tslint:disable-next-line:one-line
      {
        this.value = 'obese ';
      }
    }

}
