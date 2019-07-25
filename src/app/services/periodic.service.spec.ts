import { TestBed } from '@angular/core/testing';

import { PeriodicService } from './periodic.service';

describe('PeriodicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeriodicService = TestBed.get(PeriodicService);
    expect(service).toBeTruthy();
  });
});
