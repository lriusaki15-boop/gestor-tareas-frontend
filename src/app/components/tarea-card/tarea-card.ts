import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-card',
  imports: [FormsModule],
  standalone: true,
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
