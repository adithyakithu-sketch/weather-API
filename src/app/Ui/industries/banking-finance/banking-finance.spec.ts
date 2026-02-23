import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingFinance } from './banking-finance';

describe('BankingFinance', () => {
  let component: BankingFinance;
  let fixture: ComponentFixture<BankingFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingFinance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingFinance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
