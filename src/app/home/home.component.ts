import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { PopularComponent } from './components/popular/popular.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, PopularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
