import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ CommonModule ,FormsModule, RouterLink],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  contrasenia = '';
  errorMensaje: string | undefined;

  login() {

    const datos = {
      email: this.email,
      contrasenia: this.contrasenia
    };
    this.authService.login(datos).subscribe({
      next: (resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.clave ?? resp.Clave);
         this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
        this.errorMensaje = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
