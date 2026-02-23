import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Product } from './product';

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;

  const mockProducts = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `API Product ${i + 1}`,
    description: `Description for API Product ${i + 1}`,
    image: `https://via.placeholder.com/600x300?text=API+Product+${i + 1}`,
    price: (i + 1) * 10,
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    // avoid HTTP timing by injecting data directly
    component.setProducts(mockProducts as any);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create and map API data into 15 groups (45 cards) using setProducts', () => {
    expect(component).toBeTruthy();
    expect(component.cardGroups.length).toBe(15);
    const flat = component.cardGroups.flat();
    expect(flat.length).toBe(45);
    expect(flat[0].title).toBe(mockProducts[0].title);
    expect(flat[0].price).toBe(mockProducts[0].price);
  });

  it('renders price in a visible <p>, binds image src and has a router link', async () => {
    const sample = [{ id: 42, title: 'X', description: 'Y', image: 'https://img.test/x.png', price: 19.99 }];
    component.setProducts(sample as any);
    fixture.detectChanges();
    await fixture.whenStable();

    const el: HTMLElement = fixture.nativeElement;
    const links = Array.from(el.querySelectorAll('.stretched-link')) as HTMLElement[];
    const linkEl = links.find(l => l.getAttribute('data-href') === '/products/42') || null;
    expect(linkEl, 'stretched-link with /products/42 should exist').toBeTruthy();

    const cardEl = linkEl!.closest('.card') as HTMLElement | null;
    expect(cardEl).toBeTruthy();

    const priceEl = cardEl!.querySelector('.card-price-bottom') as HTMLElement | null;
    expect(priceEl).toBeTruthy();
    expect(priceEl?.textContent).toContain('$19.99');

    const imgEl = cardEl!.querySelector('.card-img-top') as HTMLImageElement | null;
    expect(imgEl).toBeTruthy();
    expect(imgEl?.src).toContain('https://img.test/x.png');

    const buyBtn = cardEl!.querySelector('.btn-buy-now') as HTMLButtonElement | null;
    expect(buyBtn).toBeTruthy();
    expect(buyBtn?.getAttribute('data-buy-href')).toBe('/products/42?buy=true');

    // verify programmatic navigation is wired (avoid test framework spy helper)
    const router = TestBed.inject(Router) as any;
    let calledArgs: any = null;
    router.navigate = (...args: any[]) => { calledArgs = args; return Promise.resolve(true); };
    component.buyNow(42);
    expect(calledArgs).toEqual([['/products', 42], { queryParams: { buy: 'true' } }]);
  });
});
