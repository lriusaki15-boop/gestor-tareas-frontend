import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);

  email = '';
  contrasenia = '';

  login() {

    const datos = {
      email: this.email,
      contrasenia: this.contrasenia
    };
    this.authService.login(datos).subscribe({
      next: (resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.clave ?? resp.Clave);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
