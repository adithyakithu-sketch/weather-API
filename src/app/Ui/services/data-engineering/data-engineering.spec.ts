import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEngineering } from './data-engineering';

describe('DataEngineering', () => {
  let component: DataEngineering;
  let fixture: ComponentFixture<DataEngineering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEngineering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEngineering);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
