import { TestBed } from '@angular/core/testing';

import { SpindService } from './spind.service';

describe('SpindService', () => {
  let service: SpindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
