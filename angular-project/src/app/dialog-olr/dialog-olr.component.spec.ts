import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOLRComponent } from './dialog-olr.component';

describe('DialogOLRComponent', () => {
  let component: DialogOLRComponent;
  let fixture: ComponentFixture<DialogOLRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOLRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
