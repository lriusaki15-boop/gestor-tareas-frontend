import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas';
import { Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tarea-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea-detalle.html',
  styleUrls: ['./tarea-detalle.css']
})
export class TareaDetalle implements  OnChanges {
  @Input() idTarea = 0;

  titulo = '';
  descripcion = '';

  tarea: any;
  editando = false;
  backup: any;

  constructor(
    private tareasService: TareasService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['idTarea'] && this.idTarea > 0) {
    this.cargarTarea();
  }
}

private cargarTarea() {
  this.tareasService.obtenerTareaPorId(this.idTarea).subscribe({
    next: (data) => {
      this.tarea = data;
    },
    error: (err) => console.error(err)
  });
}

  activarEdicion() {
    this.backup = { ...this.tarea };
    this.editando = true;
  }

  cancelarEdicion() {
    this.tarea = { ...this.backup };
    this.editando = false;
  }

  guardarEdicion() {
    this.tareasService.actualizarTarea(this.tarea).subscribe({
      next: (data) => {
        this.tarea = data;
        this.editando = false;
      },
      error: (err) => console.error(err)
    });
  }

  eliminarTarea() {
    if (!confirm('¿Seguro que quieres eliminar esta tarea?')) return;

    this.tareasService.eliminarTarea(this.tarea.id).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => console.error(err)
    });
  }
}