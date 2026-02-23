import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Healthcare } from './healthcare';

describe('Healthcare', () => {
  let component: Healthcare;
  let fixture: ComponentFixture<Healthcare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Healthcare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Healthcare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
