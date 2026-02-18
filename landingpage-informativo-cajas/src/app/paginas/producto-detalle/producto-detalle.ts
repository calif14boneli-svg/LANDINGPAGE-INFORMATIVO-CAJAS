import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {

   productos = [
  {
    id: 'corrugado',
    nombre: 'Cajas de cartón corrugado',
    descripcion: 'Soluciones resistentes para transporte y almacenamiento.',
    imagen: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc'
  },
  {
    id: 'personalizadas',
    nombre: 'Cajas personalizadas',
    descripcion: 'Diseños únicos adaptados a tu marca.',
    imagen: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da'
  },
  {
    id: 'exportacion',
    nombre: 'Cajas para exportación',
    descripcion: 'Alta resistencia para comercio internacional.',
    imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d'
  },
  {
    id: 'industriales',
    nombre: 'Cajas industriales',
    descripcion: 'Soluciones robustas para uso industrial.',
    imagen: 'https://images.unsplash.com/photo-1553413077-190dd305871c'
  },
  {
    id: 'alimentos',
    nombre: 'Cajas para alimentos',
    descripcion: 'Empaques seguros para productos alimenticios.',
    imagen: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc'
  }
];

producto: any;

constructor(private route: ActivatedRoute) {
  const id = this.route.snapshot.params['id'];
  this.producto = this.productos.find(p => p.id === id);
}

}
