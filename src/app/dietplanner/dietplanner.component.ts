import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { ViewfoodService }  from '../services/viewfood.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {  TemplateRef } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';
import {  ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-dietplanner',
  templateUrl: './dietplanner.component.html',
  styleUrls: ['./dietplanner.component.css']
})
export class DietplannerComponent implements OnInit {
  gender: String;
  for: String;
  dietPrefrence: String;
  mealNo: String;
  snackNo: String;
  public result: any[];
  modalRef: BsModalRef;
  c: any;

  constructor(private viewFoodService: ViewfoodService, public share: ShareButtons, private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }
  // tslint:disable-next-line:one-line
  onPrefrenceSubmit(){
    const prefrence = {
      gender: this.gender,
      for: this.for,
      dietPrefrence: this.dietPrefrence,
      mealNo: this.mealNo,
      snackNo: this.snackNo
    };

    this.viewFoodService.viewFood(prefrence).subscribe(data => {
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
  // tslint:disable-next-line:member-ordering
  @ViewChild('content') content: ElementRef;
  public downloadpdf() {
    const doc = new jsPDF();
    const SpecialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 20, 20, {
      'width': 2500,
      'elementHandlers': SpecialElementHandlers
    });
    doc.save('test.pdf');
  }
}
