import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurity } from './cyber-security';

describe('CyberSecurity', () => {
  let component: CyberSecurity;
  let fixture: ComponentFixture<CyberSecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecurity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberSecurity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
