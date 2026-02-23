import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerospaceDefence } from './aerospace-defence';

describe('AerospaceDefence', () => {
  let component: AerospaceDefence;
  let fixture: ComponentFixture<AerospaceDefence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AerospaceDefence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerospaceDefence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
