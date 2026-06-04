import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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