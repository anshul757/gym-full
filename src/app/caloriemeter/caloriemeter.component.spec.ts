import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriemeterComponent } from './caloriemeter.component';

describe('CaloriemeterComponent', () => {
  let component: CaloriemeterComponent;
  let fixture: ComponentFixture<CaloriemeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriemeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriemeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
