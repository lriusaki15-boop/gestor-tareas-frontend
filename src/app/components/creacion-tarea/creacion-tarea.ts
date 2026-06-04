import { Component, inject } from '@angular/core';
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

  private tareasService = inject(TareasService);

  titulo = '';
  descripcion = '';

  mensajeExito = '';
  mensajeError = '';

  crearTarea(): void {

    this.mensajeExito = '';
    this.mensajeError = '';

    const nuevaTarea = {
      titulo: this.titulo,
      descripcion: this.descripcion
    };

    this.tareasService.crearTarea(nuevaTarea).subscribe({
      next: () => {

        this.mensajeExito = 'Tarea creada correctamente';

        this.titulo = '';
        this.descripcion = '';
      },
      error: (err) => {
        console.error(err);
        this.mensajeError = 'No se pudo crear la tarea';
      }
    });
  }
}
