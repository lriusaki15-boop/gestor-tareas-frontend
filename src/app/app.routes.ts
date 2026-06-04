import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registrar } from './components/registrar/registrar';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
<<<<<<< HEAD
  { path: '',redirectTo: 'login',pathMatch: 'full' },
=======
  { path: '', redirectTo: 'login', pathMatch: 'full' },
>>>>>>> 40301ba705e52bf880429d07c4c0b00a9e83c061
  { path: 'login', component: Login },
  { path: 'registrar', component: Registrar },
  { path: 'home', component: Home , canActivate: [authGuard]}
];