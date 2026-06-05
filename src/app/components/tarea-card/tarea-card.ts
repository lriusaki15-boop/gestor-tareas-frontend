import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea-card',
  imports: [],
  standalone: true,
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
  @Output() verDetalle = new EventEmitter<number>();
  @Input() id = 0;
  
  @Input() titulo = '';

  @Input() fechaCreacion!: string;

  @Input() responsable : string | undefined;

  @Input() estado = 0;

  abrirDetalle() {
    this.verDetalle.emit(this.id);
  }

}
