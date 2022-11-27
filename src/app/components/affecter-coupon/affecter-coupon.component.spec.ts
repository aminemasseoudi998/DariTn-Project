import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterCouponComponent } from './affecter-coupon.component';

describe('AffecterCouponComponent', () => {
  let component: AffecterCouponComponent;
  let fixture: ComponentFixture<AffecterCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
