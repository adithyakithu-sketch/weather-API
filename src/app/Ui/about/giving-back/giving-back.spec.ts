import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingBack } from './giving-back';

describe('GivingBack', () => {
  let component: GivingBack;
  let fixture: ComponentFixture<GivingBack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GivingBack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivingBack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
