import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplannerComponent } from './dietplanner.component';

describe('DietplannerComponent', () => {
  let component: DietplannerComponent;
  let fixture: ComponentFixture<DietplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
