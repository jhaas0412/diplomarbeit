import { TestBed } from '@angular/core/testing';

import { RecordReqService } from './record-req.service';

describe('RecordReqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordReqService = TestBed.get(RecordReqService);
    expect(service).toBeTruthy();
  });
});
