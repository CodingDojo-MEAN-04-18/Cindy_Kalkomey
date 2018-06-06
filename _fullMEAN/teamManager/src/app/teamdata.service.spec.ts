import { TestBed, inject } from '@angular/core/testing';

import { TeamdataService } from './teamdata.service';

describe('TeamdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamdataService]
    });
  });

  it('should be created', inject([TeamdataService], (service: TeamdataService) => {
    expect(service).toBeTruthy();
  }));
});
