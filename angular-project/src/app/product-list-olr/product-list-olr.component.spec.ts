import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListOLRComponent } from './product-list-olr.component';

describe('ProductListOLRComponent', () => {
  let component: ProductListOLRComponent;
  let fixture: ComponentFixture<ProductListOLRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListOLRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListOLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
