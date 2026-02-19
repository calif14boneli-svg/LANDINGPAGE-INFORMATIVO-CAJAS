import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicio-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio-detalle.html',
  styleUrls: ['./servicio-detalle.css']
})
export class ServicioDetalle {

  titulo = '';
  imagen = '';

  constructor(private route: ActivatedRoute) {
    this.titulo = this.route.snapshot.paramMap.get('nombre') || '';

    const imagenes: any = {
      Troquelado: 'assets/img/troquelado.jpg',
      Laminado: 'assets/img/laminado.jpg',
      Corrugado: 'assets/img/corrugado.jpg',
      'Impresión Offset': 'assets/img/offset.jpg',
      Serigrafía: 'assets/img/serigrafia.jpg'
    };

    this.imagen = imagenes[this.titulo];
  }
}