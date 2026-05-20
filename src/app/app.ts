import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CursosList } from './cursos-list/cursos-list';
import { CursosForm } from './cursos-form/cursos-form';

interface Curso {
  id: number;
  nombre: string;
  docente: string;
  activo: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, CursosList, CursosForm, Footer],
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
