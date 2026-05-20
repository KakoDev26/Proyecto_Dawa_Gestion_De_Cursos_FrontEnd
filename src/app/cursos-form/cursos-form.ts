import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursos-form.html',
  styleUrl: './cursos-form.css',
})
export class CursosForm {
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