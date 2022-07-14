import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toogle,editar, borrar, toogleAll } from './todo.actions';


export const initialState:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje IronMan'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state,{texto}) => [...state,new Todo(texto)] ),
  on(borrar,(state,{id}) => state.filter(todo=> todo.id != id)),
  on(toogleAll,(state,{completado})=>{
    return state.map(todo=>{
      return{
        ...todo,
        completado:completado
      }
    }
      
    )
  }),

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