// src/app/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importação do CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  // Incluindo o CommonModule nas imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  promoImages = [
    { src: 'https://via.placeholder.com/300', alt: 'Promoção 1', title: 'Promoção de Verão' },
    { src: 'https://via.placeholder.com/300', alt: 'Promoção 2', title: 'Liquidação de Inverno' },
    { src: 'https://via.placeholder.com/300', alt: 'Promoção 3', title: 'Promoção de Natal' }
  ];
}
