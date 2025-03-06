import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import ShopComponent from './shop/shop.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: AboutComponent,
  },
  {
    path: 'tienda',
    component: ShopComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
