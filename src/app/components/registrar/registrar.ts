import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-registrar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './registrar.html',
  styleUrl: './registrar.css',
})
export class Registrar {
  private authService = inject(AuthService);
  private router = inject(Router);

  nombre = '';
  apellidos = '';
  email = '';
  contrasenia = '';
  contraseniaConfirmacion = '';
  aceptaTerminos = false;

  registrar() {

      if (this.contrasenia !== this.contraseniaConfirmacion) {
        alert('Las contraseñas no coinciden');
        return;
      }

      if (!this.aceptaTerminos) {
        alert('Debes aceptar los términos');
        return;
      }

      const usuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      contrasenia: this.contrasenia,
      rango: 2
    };

    this.authService.registrar(usuario).subscribe({
      next: (resp) => {
        console.log('Usuario registrado', resp);
        alert('Usuario registrado correctamente');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}