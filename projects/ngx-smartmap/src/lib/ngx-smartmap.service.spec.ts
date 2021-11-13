import { TestBed } from '@angular/core/testing';

import { NgxSmartmapService } from './ngx-smartmap.service';

describe('NgxSmartmapService', () => {
  let service: NgxSmartmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSmartmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
