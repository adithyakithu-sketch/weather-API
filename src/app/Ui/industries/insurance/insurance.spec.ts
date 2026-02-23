import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance } from './insurance';

describe('Insurance', () => {
  let component: Insurance;
  let fixture: ComponentFixture<Insurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
