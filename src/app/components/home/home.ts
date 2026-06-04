import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas';
import { CommonModule } from '@angular/common';
import { TareaCard } from '../tarea-card/tarea-card';
import { CreacionTarea } from '../creacion-tarea/creacion-tarea';

@Component({
   selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TareaCard, CreacionTarea],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private router = inject(Router);
  private tareasService = inject(TareasService);

  tareas: any[] = [];

  ngOnInit() {
    this.tareasService.obtenerTareas().subscribe({
      next: (data) => {
        this.tareas = data;
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}