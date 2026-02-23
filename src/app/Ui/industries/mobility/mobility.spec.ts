import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobility } from './mobility';

describe('Mobility', () => {
  let component: Mobility;
  let fixture: ComponentFixture<Mobility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mobility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobility);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
