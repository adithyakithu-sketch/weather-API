import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devops } from './devops';

describe('Devops', () => {
  let component: Devops;
  let fixture: ComponentFixture<Devops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
