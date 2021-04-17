import { TestBed } from '@angular/core/testing';

import { FabricationService } from './fabrication.service';

describe('FabricationService', () => {
  let service: FabricationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabricationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
