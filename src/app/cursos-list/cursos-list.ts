import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Curso {
  id: number;
  nombre: string;
  docente: string;
  activo: boolean;
}


@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos-list.html',
  styleUrl: './cursos-list.css',
})
export class CursosList {

 @Input() cursos: Curso[] = [];

  cambiarEstado(curso: Curso) {
    curso.activo = !curso.activo;
  }
}
