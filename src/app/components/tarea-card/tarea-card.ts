import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarea-card',
  imports: [],
  standalone: true,
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
  @Input() titulo = '';

  @Input() nombreUsuario = '';

  @Input() fechaCreacion!: Date;

  @Input() estaCompletada = false;
}
