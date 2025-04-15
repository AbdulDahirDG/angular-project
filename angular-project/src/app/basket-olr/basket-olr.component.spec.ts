import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketOLRComponent } from './basket-olr.component';

describe('BasketOLRComponent', () => {
  let component: BasketOLRComponent;
  let fixture: ComponentFixture<BasketOLRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketOLRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketOLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
