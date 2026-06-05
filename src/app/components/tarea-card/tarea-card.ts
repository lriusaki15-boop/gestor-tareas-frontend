import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-tarea-card',
  imports: [],
  standalone: true,
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
  private router = inject(Router);
  @Input() id = 0;
  
  @Input() titulo = '';

  @Input() nombreUsuario = '';

  @Input() fechaCreacion!: string;

  @Input() responsable : string | undefined;

  @Input() estado = 0;

  abrirDetalle() {
    this.router.navigate(['/tarea', this.id]);
  }

}
