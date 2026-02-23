import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsletters } from './newsletters';

describe('Newsletters', () => {
  let component: Newsletters;
  let fixture: ComponentFixture<Newsletters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newsletters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newsletters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
