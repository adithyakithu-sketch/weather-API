import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gis } from './gis';

describe('Gis', () => {
  let component: Gis;
  let fixture: ComponentFixture<Gis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
