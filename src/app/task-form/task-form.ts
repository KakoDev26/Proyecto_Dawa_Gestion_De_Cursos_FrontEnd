import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Output() cursoAgregado = new EventEmitter<any>();
  nombre = '';
  docente = '';

  agregarCurso() 
  {
    if (this.nombre.trim() === '' || this.docente.trim() === '') 
    {
      return;
    }
    const nuevoCurso = 
    {
      id: Date.now(),
      nombre: this.nombre,
      docente: this.docente,
      activo: false,
    };
    this.cursoAgregado.emit(nuevoCurso);
    this.nombre = '';
    this.docente = '';
  }
}
