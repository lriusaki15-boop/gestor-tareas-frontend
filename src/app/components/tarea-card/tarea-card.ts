import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-card',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
  @Input() titulo = '';

  @Input() nombreUsuario = '';

  @Input() fechaLimite = '';

  @Input() estaCompletada = false;
}
