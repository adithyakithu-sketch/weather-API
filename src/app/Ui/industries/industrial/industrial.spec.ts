import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Industrial } from './industrial';

describe('Industrial', () => {
  let component: Industrial;
  let fixture: ComponentFixture<Industrial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Industrial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Industrial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
