import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-product-card',
    imports: [MatButtonModule, MatCardModule, MatIconModule, CurrencyPipe],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<Product>()

  addToCart(product: Product) {
    console.log('Product added to cart', product)
  }
}

interface Product {
  price: number,
  name: string,
}
