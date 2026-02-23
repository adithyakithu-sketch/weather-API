import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whitepapers } from './whitepapers';

describe('Whitepapers', () => {
  let component: Whitepapers;
  let fixture: ComponentFixture<Whitepapers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whitepapers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whitepapers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
