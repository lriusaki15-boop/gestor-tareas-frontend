import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasService } from '../../services/tareas';

@Component({
  selector: 'app-tarea-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea-detalle.html',
  styleUrls: ['./tarea-detalle.css']
})
export class TareaDetalle implements OnInit {

  tarea: any;
  editando = false;
  backup: any;

  constructor(
    private route: ActivatedRoute,
    private tareasService: TareasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tareasService.obtenerTareaPorId(id).subscribe({
      next: (data) => this.tarea = data,
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