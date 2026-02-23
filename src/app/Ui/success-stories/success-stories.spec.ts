import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStories } from './success-stories';

describe('SuccessStories', () => {
  let component: SuccessStories;
  let fixture: ComponentFixture<SuccessStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
