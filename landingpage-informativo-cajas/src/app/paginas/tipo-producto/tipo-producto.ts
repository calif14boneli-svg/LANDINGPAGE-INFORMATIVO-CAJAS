import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tipo-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tipo-producto.html',
  styleUrl: './tipo-producto.css',
})
export class TipoProducto {

   productos = [
    {
      id: 'corrugado',
      nombre: 'Cajas de cartón corrugado',
      imagen: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc'
    },
    {
      id: 'personalizadas',
      nombre: 'Cajas personalizadas',
      imagen: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da'
    },
    {
      id: 'exportacion',
      nombre: 'Cajas para exportación',
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d'
    },
    {
  id: 'industriales',
  nombre: 'Cajas industriales',
  imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
},
    {
      id: 'alimentos',
      nombre: 'Cajas para alimentos',
      imagen: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc'
    }
  ];

}
