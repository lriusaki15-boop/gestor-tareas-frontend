import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareasService } from '../../services/tareas';

@Component({
  selector: 'app-creacion-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-tarea.html',
  styleUrl: './creacion-tarea.css'
})

export class CreacionTarea {
  @Output() tareaCreada = new EventEmitter<void>();
  private tareasService = inject(TareasService);

  titulo = '';
  descripcion = '';
  responsable = '';
  prioridad = '';
  usuarioId = '';

  mensajeExito = '';
  mensajeError = '';

  crearTarea(): void {

    this.mensajeExito = '';
    this.mensajeError = '';

    const nuevaTarea = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      responsable: localStorage.getItem('nombre'),
      prioridad: this.prioridad,
      estado: 0,
      usuarioId: localStorage.getItem('idUsuario')
    };

    this.tareasService.crearTarea(nuevaTarea).subscribe({
      next: () => {
        this.mensajeExito = 'Tarea creada correctamente';
        this.tareaCreada.emit();
      },
      error: (err) => {
        console.error(err);
        this.mensajeError = 'No se pudo crear la tarea';
      }
    });
  }
}
