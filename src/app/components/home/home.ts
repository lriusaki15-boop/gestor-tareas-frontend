import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuario';
import { TareasService } from '../../services/tareas';
import { TareaCard } from '../tarea-card/tarea-card';
import { CreacionTarea } from '../creacion-tarea/creacion-tarea';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TareaCard,
    CreacionTarea
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private usuariosService = inject(UsuariosService);
  private router = inject(Router);
  private tareasService = inject(TareasService);

  tareas: any[] = [];
  usuarios: any[] = [];

  vistaActual: 'inicio' | 'crear' | 'usuarios' = 'inicio';

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareasService.obtenerTareas().subscribe({
      next: (data) => {
        this.tareas = data;
      }
    });
  }

  cambiarVista(vista: 'inicio' | 'crear' | 'usuarios') {
    this.vistaActual = vista;

    if (vista === 'inicio') {
      this.cargarTareas();
    }
    if (vista === 'usuarios') {

    this.usuariosService.obtenerListadoUsuarios().subscribe({
        next: (data) => {
          this.usuarios = data;
        }
      });
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('idUsuario');
    this.router.navigate(['/login']);
  }
}