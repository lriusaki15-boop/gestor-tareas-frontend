import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasService } from '../../services/tareas';
import { TareaDetalle } from './tarea-detalle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.css']
})
export class TareaDetalleComponent implements OnInit {

  tarea: any; // reemplaza con tu modelo Tarea
  editando = false; // control de modo edición
  tareaBackup: any; // para cancelar cambios

  constructor(
    private route: ActivatedRoute,
    private tareasService: TareasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tareasService.obtenerTareaPorId(id).subscribe({
      next: (data) => this.tarea = data,
      error: (err) => console.error('Error cargando tarea', err)
    });
  }

  activarEdicion() {
    this.editando = true;
    this.tareaBackup = { ...this.tarea }; // guardamos copia
  }

  cancelarEdicion() {
    this.editando = false;
    this.tarea = { ...this.tareaBackup }; // restauramos
  }

  guardarEdicion() {
    this.tareasService.actualizarTarea(this.tarea).subscribe({
      next: (data) => {
        this.tarea = data;
        this.editando = false;
      },
      error: (err) => console.error('Error actualizando tarea', err)
    });
  }

  eliminarTarea() {
    if (confirm('¿Seguro que quieres eliminar esta tarea?')) {
      this.tareasService.eliminarTarea(this.tarea.id).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Error eliminando tarea', err)
      });
    }
  }
}