import { TestBed } from '@angular/core/testing';

import { LevelsJsonService } from './levels-json.service';

describe('LevelsJsonService', () => {
  let service: LevelsJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelsJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
