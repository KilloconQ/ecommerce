import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ShopComponent {}
