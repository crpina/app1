import { TestBed } from '@angular/core/testing';

import { AlfredService } from './alfred.service';

describe('AlfredService', () => {
  let service: AlfredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlfredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
