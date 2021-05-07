import { TestBed } from '@angular/core/testing';

import { LaunchShuttleService } from './launch-shuttle.service';

describe('LaunchShuttleService', () => {
  let service: LaunchShuttleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchShuttleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
