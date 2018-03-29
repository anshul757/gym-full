import { Component, OnInit } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';

import {  ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {

  constructor(public share: ShareButtons) {
  }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  @ViewChild('content') content: ElementRef;
  // tslint:disable-next-line:one-line
  public downloadpdf(){
    // tslint:disable-next-line:prefer-const
    let doc = new jsPDF();
    // tslint:disable-next-line:prefer-const
    let SpecialElementHandlers = {
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
