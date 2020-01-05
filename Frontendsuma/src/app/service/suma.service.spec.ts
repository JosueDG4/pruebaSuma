import { TestBed } from '@angular/core/testing';

import { SumaService } from './suma.service';

describe('SumaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumaService = TestBed.get(SumaService);
    expect(service).toBeTruthy();
  });
});
