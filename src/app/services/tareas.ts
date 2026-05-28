import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:5001/api/tareas';

  obtenerTareas() {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearTarea(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  editarTarea(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarTarea(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}