import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea-card',
  imports: [],
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
  titulo = 'Preparar informe trimestral';
  nombreUsuario = 'Ana García';
  fechaLimite = '30 jun 2025';
  estaCompletada = false;
  tipo = 'Simple';
}
