import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

interface ApiProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product implements OnInit {
  /** groups × perGroup grid (rendered as a compact grid) */
  cardGroups: Array<Array<{ id: number; title: string; text: string; updated: string; img: string; price: number; displayPrice: string }>> = [];
  loading = true;
  error: string | null = null;

  private readonly groups = 15;
  private readonly perGroup = 3;
  private readonly apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // avoid auto-loading when data was injected (prevents test race / E-C-A-H-C errors)
    if (!this.cardGroups || this.cardGroups.length === 0) {
      this.loadFromApi();
    } else {
      this.loading = false;
    }
  }

  /** Load from fakestoreapi and populate `cardGroups` (cycles source if fewer items than needed) */
  loadFromApi(): void {
    this.loading = true;
    this.error = null;

    this.http
      .get<ApiProduct[]>(this.apiUrl)
      .pipe(
        map((list) => list || []),
        catchError((err) => {
          this.error = 'Failed to load products from API';
          return of([] as ApiProduct[]);
        })
      )
      .subscribe((list) => {
        this.setProducts(list);
        this.loading = false;
      });
  }

  /** Programmatic buy action — navigates to product detail with buy flag */
  buyNow(id: number): void {
    this.router.navigate(['/products', id], { queryParams: { buy: 'true' } });
  }

  /** Flattened array used by the grid template (easier/responsive) */
  flatCards: Array<{ id: number; title: string; text: string; updated: string; img: string; price: number; displayPrice: string }> = [];

  /** Public setter — useful for tests or passing data from outside */
  setProducts(products: ApiProduct[] | any[]): void {
    const needed = this.groups * this.perGroup;
    const source = (products && products.length) ? products : [];

    const items = Array.from({ length: needed }, (_, i) => {
      const src = source.length ? source[i % source.length] : null;
      const price = src?.price ?? 0;
      return {
        id: src?.id ?? i + 1,
        title: src?.title ?? `Product ${i + 1}`,
        text: src?.description ?? '',
        img: src?.image ?? `https://via.placeholder.com/600x300?text=Product+${i + 1}`,
        price,
        displayPrice: `$${Number(price).toFixed(2)}`,
        updated: '3 mins ago',
      };
    });

    // populate flat list and groups (groups kept for backward compatibility)
    this.flatCards = items.slice();

    this.cardGroups = [];
    for (let g = 0; g < this.groups; g++) {
      this.cardGroups.push(items.slice(g * this.perGroup, g * this.perGroup + this.perGroup));
    }

    // when data injected, ensure loading state is cleared
    this.loading = false;
    this.error = null;
  }
}
