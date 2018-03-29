import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CaloriemeterService } from '../services/caloriemeter.service';

@Component({
  selector: 'app-caloriemeter',
  templateUrl: './caloriemeter.component.html',
  styleUrls: ['./caloriemeter.component.css']
})
export class CaloriemeterComponent implements OnInit {
  calorie: Array<any>;
  calorieBase: Array<any> = [];
  stateForm: FormGroup;
  search: string;
  public showCalerie: string;
  cards: Array<any> = [];
  showDropDown = false;


  constructor(private fb: FormBuilder, private caloriemeterservice: CaloriemeterService) {
    this.initForm();
  }
  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    });
  }
  ngOnInit() {
    this.caloriemeterservice.getitems().subscribe(
      (calorie) => {
       this.calorie = calorie;
       this.calorieBase = JSON.parse(JSON.stringify(calorie));
      },
      (error) => {
        console.log(error);
      }
   );
  }
  selectValue(value) {
    this.stateForm.patchValue({'search': value.name});
    this.showDropDown = false;
    this.showCalerie = value.calorie;
    this.cards.push(value);
  }
   closeDropDown() {
     this.showDropDown = !this.showDropDown;
   }

   openDropDown() {
     this.showDropDown = false;
   }

   getSearchValue() {
     return this.stateForm.value.search;
   }

   filterCalorie(search): void {
     this.calorie = this.calorieBase.filter(
       (cal) => {
         return cal.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
       }
     );
   }

}
