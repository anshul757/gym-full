import { TestBed, inject } from '@angular/core/testing';

import { ViewfoodService } from './viewfood.service';

describe('ViewfoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewfoodService]
    });
  });

  it('should be created', inject([ViewfoodService], (service: ViewfoodService) => {
    expect(service).toBeTruthy();
  }));
});
