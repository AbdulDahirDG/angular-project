import { TestBed } from '@angular/core/testing';

import { ProductPanelService } from './product-panel.service';

describe('ProductPanelService', () => {
  let service: ProductPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
