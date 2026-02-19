import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
   standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios implements AfterViewInit {

  @ViewChild('track') track!: ElementRef;

  currentIndex = 2;
  intervalId: any;

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

  ngAfterViewInit() {
  setTimeout(() => {
    this.updateSlider();
  });
}

  updateSlider() {
  if (!this.track) return;

  const trackEl = this.track.nativeElement;
  const slideWidth = 400;
  const containerWidth = trackEl.parentElement.offsetWidth;
  const totalWidth = this.services.length * slideWidth;

  let offset =
    (this.currentIndex * slideWidth) -
    (containerWidth / 2) +
    (slideWidth / 2);

  // 👇 LIMITES IMPORTANTES
  const maxOffset = totalWidth - containerWidth;

  if (offset < 0) offset = 0;
  if (offset > maxOffset) offset = maxOffset;

  trackEl.style.transform = `translateX(-${offset}px)`;
}

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.services.length;

    this.updateSlider();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.services.length) % this.services.length;

    this.updateSlider();
  }

  selectSlide(index: number) {
  this.currentIndex = index;
  this.updateSlider();
}

}
