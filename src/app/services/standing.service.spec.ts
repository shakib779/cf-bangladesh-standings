import { TestBed } from '@angular/core/testing';

import { StandingService } from './standing.service';

describe('StandingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandingService = TestBed.get(StandingService);
    expect(service).toBeTruthy();
  });
});
