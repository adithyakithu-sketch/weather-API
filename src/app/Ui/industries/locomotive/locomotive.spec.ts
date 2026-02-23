import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Locomotive } from './locomotive';

describe('Locomotive', () => {
  let component: Locomotive;
  let fixture: ComponentFixture<Locomotive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Locomotive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Locomotive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
