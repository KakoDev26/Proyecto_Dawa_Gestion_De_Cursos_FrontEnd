import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';
import { Footer } from './footer/footer';
import { TaskForm } from './task-form/task-form';

interface Curso {
  id: number;
  nombre: string;
  docente: string;
  activo: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, TaskList, Footer, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Desarrollo de aplicaciones web Avanzado',
      docente: 'Ing. Joel Barba',
      activo: true,
    },
    {
      id: 2,
      nombre: 'Marco legal de la profesión',
      docente: 'Abg. Jessica Ortiz',
      activo: true,
    },
    {
      id: 3,
      nombre: 'Calidad de Software',
      docente: 'Ing. Martha Hernandez',
      activo: true,
    }
  ];
  agregarNuevoCurso(curso: Curso){
    this.cursos.push(curso)
  }
}
