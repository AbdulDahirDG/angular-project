import { TestBed } from '@angular/core/testing';

import { BasketOLRService } from './basket-olr.service';

describe('BasketOLRService', () => {
  let service: BasketOLRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketOLRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
