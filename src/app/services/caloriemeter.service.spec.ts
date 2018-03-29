import { TestBed, inject } from '@angular/core/testing';

import { CaloriemeterService } from './caloriemeter.service';

describe('CaloriemeterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaloriemeterService]
    });
  });

  it('should be created', inject([CaloriemeterService], (service: CaloriemeterService) => {
    expect(service).toBeTruthy();
  }));
});
