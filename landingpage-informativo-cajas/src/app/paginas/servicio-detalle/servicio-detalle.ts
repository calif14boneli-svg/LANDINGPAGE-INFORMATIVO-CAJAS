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

  services = [
  {
    title: 'Troquelado',
    img: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    title: 'Laminado',
    img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    title: 'Corrugado',
    img: 'https://images.pexels.com/photos/6169667/pexels-photo-6169667.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    title: 'Impresión Offset',
    img: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    title: 'Serigrafía',
    img: 'https://images.pexels.com/photos/1030972/pexels-photo-1030972.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

  constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const nombreServicio = params.get('nombre');

    if (!nombreServicio) return;

    const servicioEncontrado = this.services.find(service =>
      service.title.toLowerCase() === nombreServicio.toLowerCase()
    );

    if (servicioEncontrado) {
      this.titulo = servicioEncontrado.title;
      this.imagen = servicioEncontrado.img;
    } else {
      this.titulo = 'Servicio';
      this.imagen = '';
    }
  });
}
}