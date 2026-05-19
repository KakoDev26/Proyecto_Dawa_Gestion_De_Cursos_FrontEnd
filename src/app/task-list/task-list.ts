import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Curso {
  id: number;
  nombre: string;
  docente: string;
  activo: boolean;
}


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

 @Input() cursos: Curso[] = [];

  cambiarEstado(curso: Curso) {
    curso.activo = !curso.activo;
  }
}
