import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { PopularComponent } from './components/popular/popular.component';
import { ExploreComponent } from './components/explore/explore.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, PopularComponent, ExploreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
