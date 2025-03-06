import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent {
  products: Explore[] = [
    { category: 'Bajos' },
    { category: 'Amplificadores' },
    { category: 'Cuerdas' },
    { category: 'Efectos' },
    { category: 'Accesorios' },
  ];
}

interface Explore {
  img?: string;
  category?: string;
}
