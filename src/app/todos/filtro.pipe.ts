import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/flitro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(todos:Todo[] ,filtro:filtrosValidos) {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado)
        
      case 'pendientes':
        return todos.filter(todo => !todo.completado)
          
      default:
        break;
    }
    return todos
  }

}
