import { TestBed } from '@angular/core/testing';

import { TabFactoryService } from './tab-factory.service';

describe('TabFactoryService', () => {
  let service: TabFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
