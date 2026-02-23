import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIsmsPolicy } from './quality-isms-policy';

describe('QualityIsmsPolicy', () => {
  let component: QualityIsmsPolicy;
  let fixture: ComponentFixture<QualityIsmsPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityIsmsPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityIsmsPolicy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
