import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registrar } from './components/registrar/registrar';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'registrar', component: Registrar }
];