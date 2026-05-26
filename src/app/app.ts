import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaCard } from './components/tarea-card/tarea-card';
import { Login } from "./components/login/login";
import { Registrar } from "./components/registrar/registrar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TareaCard, Login, Registrar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestor-tareas-frontend');
}
