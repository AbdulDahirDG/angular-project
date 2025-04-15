import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOLRComponent } from './product-olr.component';

describe('ProductOLRComponent', () => {
  let component: ProductOLRComponent;
  let fixture: ComponentFixture<ProductOLRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOLRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
