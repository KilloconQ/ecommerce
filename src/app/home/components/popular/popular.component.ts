import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductCardComponent } from '../../../shared/product-card/product-card.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularComponent {
  products: Product[] = [
    { price: 100, name: 'Product 1' },
    { price: 100, name: 'Product 2' },
    { price: 100, name: 'Product 3' },
    { price: 100, name: 'Product 4' },
    { price: 100, name: 'Product 5' },
  ];
}

interface Product {
  price: number;
  name: string;
}
