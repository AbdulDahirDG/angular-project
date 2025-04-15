import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOLRComponent } from './banner-olr.component';

describe('BannerOLRComponent', () => {
  let component: BannerOLRComponent;
  let fixture: ComponentFixture<BannerOLRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerOLRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerOLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
