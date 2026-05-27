import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-registrar',
  imports: [FormsModule],
  templateUrl: './registrar.html',
  styleUrl: './registrar.css',
})
export class Registrar {

  private authService = inject(AuthService);

  nombre = '';
  apellidos = '';
  email = '';
  contrasenia = '';
  contraseniaConfirmacion = '';
  aceptaTerminos = false;

  registrar() {
      const usuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      contrasenia: this.contrasenia
    };
    
    if(this.contrasenia == this.contraseniaConfirmacion){

    }else{

    }

    this.authService.registrar(usuario).subscribe({
      next: (resp) => {
        console.log('Usuario registrado', resp);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}