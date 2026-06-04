import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:5001/api/usuarios';

  obtenerListadoUsuarios() {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerUsuarioPorId(id: number, data: any) {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`, data);
  }

  obtenerUsuarioPorDatos(nombre: string, apellidos: string, email: string, tipoUsuario: number, data: any) {
    return this.http.get<any[]>(`${this.apiUrl}`, data);
  }

  editarUsuario(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}