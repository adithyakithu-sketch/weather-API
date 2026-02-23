import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServices } from './cloud-services';

describe('CloudServices', () => {
  let component: CloudServices;
  let fixture: ComponentFixture<CloudServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
