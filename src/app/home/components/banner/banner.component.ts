import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-banner',
    imports: [],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  private router = inject(Router);

  goToAbout(): void {
    this.router.navigateByUrl('/nosotros');
  }

  goToShop(): void {
    this.router.navigateByUrl('/tienda');
  }
}
