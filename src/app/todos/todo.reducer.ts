import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toogle,editar } from './todo.actions';


export const initialState:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje IronMan'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state,{texto}) => [...state,new Todo(texto)] ),
  on(toogle, (state,{id}) => {
    return state.map(todo=>{
      if(todo.id===id){
        return{
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo
      }
      
    })
  } ),

  on(editar, (state,{id,texto}) => {
    return state.map(todo=>{
      if(todo.id===id){
        return{
          ...todo,
          texto:texto
        }
      }else{
        return todo
      }
      
    })
  } ),
  
);