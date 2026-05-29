import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registrar } from './components/registrar/registrar';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registrar', component: Registrar },
  { path: 'home', component: Home , canActivate: [authGuard]}
];