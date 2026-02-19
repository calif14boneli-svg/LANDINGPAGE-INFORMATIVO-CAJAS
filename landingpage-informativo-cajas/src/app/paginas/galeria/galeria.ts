import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {
  selectedCategory = 'Todos';

  categories = ['Todos', 'Cajas', 'Corrugado', 'Lamina', 'Esquineros', 'Perzonalizado'];

  items = [
    {
      id: 1,
      title: 'Cajas de Cartón normales',
      category: 'Cajas',
      img: 'https://www.inpcar.com/galeria/cajas/1.png'
    },
    {
      id: 2,
      title: 'Cajas de Cartón para impresoras',
      category: 'Cajas',
      img: 'https://www.inpcar.com/galeria/cajas/6.png'
    },
    {
      id: 3,
      title: 'Cartón Corrugado para Embalaje',
      category: 'Corrugado',
      img: 'https://www.inpcar.com/galeria/corrugado/1.png'
    },
    {
      id: 4,
      title: 'Cajas Blancas',
      category: 'Cajas',
      img: 'https://www.inpcar.com/galeria/cajas/5.png'
    },
    {
      id: 6,
      title: 'Cajas archivadoras',
      category: 'Cajas',
      img: 'https://www.inpcar.com/galeria/cajas/2.png'
    },

    {
      id: 8,
      title: 'Cajas para delivery',
      category: 'Perzonalizado',
      img: 'https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_010816/tienda_010816_07ea23c9289047cc915b70a275add5dee4c72772_producto_large_85.png'
    },
    {
      id: 9,
      title: 'Esquineros de Cartón',
      category: 'Esquineros',
      img: 'https://www.inpcar.com/galeria/esquineros/1.png'
    },
    {
      id: 11,
      title: 'Láminas Compactas',
      category: 'Lamina',
      img: 'https://www.inpcar.com/galeria/laminas/1.png'
    },
    {
      id: 12,
      title: 'Carton de piedra',
      category: 'Lamina',
      img: 'https://lh4.googleusercontent.com/proxy/HIbfo5HI8X8VpJod40-Lc8wx4z9CjpqDZJS5moostF28AEqxlnhtVC6ehP8Odyof6dVaT33uaZ43q-Q2GIhU12DxgI6ka8FBTi-7DC4qmDV5CZ00x1mgsErjQjxRr45XfqInN-RxTjqi6EEtChZFgnnaaoKoqw'
    }
  ];

  get filteredItems() {
    if (this.selectedCategory === 'Todos') {
      return this.items;
    }
    return this.items.filter(item => item.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
